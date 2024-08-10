import { useRef } from "react";
import playIcon from "../assets/images/icon-play.svg"

export default function DefinitionHeader({ data }) {
    const audioRef = useRef();

    function getPhoneticPronounce(source) {
        const phoneticWithAudio = source.phonetics.find(phonetic => phonetic.audio);
        return phoneticWithAudio || null;
    }

    return (
        <header className="definition-block__header">
            <div>
                <h1 className="fw-bold fs-heading-l"> {data.word} </h1>
                <span className="fw-regular clr-accent-200"> {data.phonetic} </span>
            </div>

            {/* display the audio play button when an audio file is attached */}
            {getPhoneticPronounce(data) &&
                <div>
                    <audio src={getPhoneticPronounce(data).audio} ref={audioRef} />
                    <button className="definition-block__audio-button icon-button">
                        <img src={playIcon} alt="" onClick={() => audioRef.current.play()} />
                    </button>
                </div>
            }
        </header>
    )
}
