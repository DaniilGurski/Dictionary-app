import Enumeration from './Enumeration';

export default function DefinitionMeaning({ meaning }) {
    const { partOfSpeech, definitions: meaningDefinitions, synonyms, antonyms } = meaning;
    return (
        <article className="definition-meaning grid" key={partOfSpeech}>
            <h2 className="fs-heading-m italic fw-bold"> {partOfSpeech} </h2>

                <div className="grid">
                <h3 className="clr-neutral-400"> Meaning </h3>
                <ul className="definition-meaning__definitions grid">
                    {meaningDefinitions.map((definition, index) => {
                        return <li key={index} data-example={definition.example}> {definition.definition} </li>
                    })}
                </ul>
            </div>

            {synonyms.length > 0 && <Enumeration subject={"synonyms"} items={synonyms} />}
            {antonyms.length > 0 && <Enumeration subject={"antonyms"} items={antonyms} />}
        </article>
    )
}
