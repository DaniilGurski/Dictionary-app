

export default function FontSelector({ font }) {
    return (
        <div className="font-selector">
            <button 
            className="fw-bold" 
            id="font-selector" 
            role="combobox"
            aria-label="font changer button" 
            aria-expanded="false" 
            aria-controls="font-list"
            aria-haspopup="true">
                {font}
            </button>

            <ul className="font-selector__fonts grid" id="font-list" role="listbox">
                <li className="fw-bold ff-sans-serif" role="option"> 
                    <input type="radio" id="sans-serif" name="font-option"/>
                    <label htmlFor="sans-serif"> Sans Serif </label>
                </li>
                <li className="fw-bold ff-sans-serif" role="option"> 
                    <input type="radio" id="serif" name="font-option"/>
                    <label htmlFor="serif"> Serif </label>
                </li>
                <li className="fw-bold ff-sans-serif" role="option"> 
                    <input type="radio" id="mono" name="font-option"/>
                    <label htmlFor="mono"> Mono </label>
                </li>
            </ul>
        </div>
    )
}
