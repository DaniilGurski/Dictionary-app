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
                    <button 
                    className="definition-block__audio-button icon-button" 
                    aria-label="play phonetic pronunciation audio"
                    onClick={() => audioRef.current.play()}>
                        {/* <img src={playIcon} alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity="var(--icon-play-opacity, .25)"/><path d="M29 27v21l21-10.5z" fill="var(--icon-play-color)"/></g></svg>
                    </button>
                </div>
            }
        </header>
    )
}
