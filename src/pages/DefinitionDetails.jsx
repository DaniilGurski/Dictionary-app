import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import NoDefinitionsFound from "./NoDefinitionsFound";

import playIcon from "../assets/images/icon-play.svg"


const fetchDefinitionDetails = (searched) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searched}`).then(res => {
    // I need both throw an error, but also get error object from the API ?
    if (res.status === 404) {
      throw new Error("No definitions found")
    }
    return res.json()
  });
}

export default function DefinitionDetails() {
  const { word: searched } = useParams();
  const { data, isLoading, isError } = useQuery(["dictionary", searched], () => fetchDefinitionDetails(searched), {
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return <NoDefinitionsFound errorData={data} />
  }
  if (isLoading) {
    return <h1> Loading ... </h1>
  }

  function getPhoneticPronounce(source) {
    const phoneticWithAudio = source.phonetics.find(phonetic => phonetic.audio);
    return phoneticWithAudio || null;
  }

  return (
    <div className="definition-block">
      <header className="definition-block__header"> 
        <div>
          <h1 className="fw-bold fs-heading-l"> {data[0].word} </h1>
          <span className="fw-regular clr-accent-purple"> {data[0].phonetic} </span>
        </div>

        {/* display the audio play button when an audio file is attached */}
        {getPhoneticPronounce(data[0]) && 
        <div>
          <audio src={getPhoneticPronounce(data[0])}/>
          <button className="icon-button">
            <img src={playIcon} alt="" />
          </button>
        </div>
        }

      </header>
    </div>
  )
}
