import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import DefinitionHeader from "../components/DefinitionHeader";
import NoDefinitionsFound from "./NoDefinitionsFound";
import DefinitionMeaning from "../components/DefinitionMeaning";


const fetchDefinitionDetails = async (searched) => {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searched}`);
  const json = await res.json();

  if (!res.ok) {
    throw json;
  }
  return json;
}

export default function DefinitionDetails() {
  const { word: searched } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dictionary", searched],
    queryFn: () => fetchDefinitionDetails(searched),
    select: (data) => {
      return data[0];
    },
    retry: false,
    refetchOnWindowFocus: false
  })


  if (isLoading) {
    return <h1> Loading ... </h1>
  }

  if (isError) {
    return <NoDefinitionsFound errorData={error} />
  }

  return (
    <article className="definition-block">
      <DefinitionHeader data={data} />
      <ul className="definition-block__meanings" role="list"> 
        {
          data.meanings.map((meaning, index) => {
            return (
              <li key={index}> 
                <DefinitionMeaning meaning={meaning} /> 
              </li>
            )
          })
        }
      </ul>

      <footer className="definition-block__source text-underline clr-neutral-400">
        <p className="flex"> 
          Source
          <a className="clr-neutral-600" href={data.sourceUrls[0]}> {data.sourceUrls[0]} </a>
        </p>
      </footer>
    </article>
  )
}
