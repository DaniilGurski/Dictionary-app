import Enumeration from './Enumeration';

export default function DefinitionMeaning({ meaning }) {
    const { partOfSpeech, definitions: meaningDefinitions, synonyms, antonyms } = meaning;
    return (
        <article className="definition-meaning" key={partOfSpeech}>
            <h2 className="definition-meaning__part-of-speech"> {partOfSpeech} </h2>
            <h3 className="clr-neutral-400"> Meaning </h3>
            <ul>
                {meaningDefinitions.map((definition, index) => {
                    return <li key={index}> {definition.definition} </li>
                })}
            </ul>

            {synonyms.length > 0 && <Enumeration subject={"synonyms"} items={synonyms} />}
            {antonyms.length > 0 && <Enumeration subject={"antonyms"} items={antonyms} />}
        </article>
    )
}
