import { useState } from "react"


export default function FontSelector({ font, onFontSelection }) {
    const [dropdownOpened, setDropdownOpened] = useState(false)
    
    return (
        <div className="font-selector">
            <button 
            className="fw-bold" 
            id="font-selector" 
            role="combobox"
            aria-label="font changer button" 
            aria-expanded={dropdownOpened}
            aria-controls="font-list"
            aria-haspopup="true"
            onClick={() => setDropdownOpened(!dropdownOpened)}>
                {font}
            </button>

            <ul 
            className="font-selector__fonts grid" 
            id="font-list" 
            role="listbox">
                <li 
                className="fw-bold ff-sans-serif" 
                role="option" 
                onClick={() => onFontSelection("Sans Serif")}> 
                    <input type="radio" id="sans-serif" name="font-option"/>
                    <label htmlFor="sans-serif"> Sans Serif </label>
                </li>
                <li 
                className="fw-bold ff-serif" 
                role="option" 
                onClick={() => onFontSelection("Serif")}> 
                    <input type="radio" id="serif" name="font-option"/>
                    <label htmlFor="serif"> Serif </label>
                </li>
                <li 
                className="fw-bold ff-mono" 
                role="option" 
                onClick={() => onFontSelection("Mono")}> 
                    <input type="radio" id="mono" name="font-option"/>
                    <label htmlFor="mono"> Mono </label>
                </li>
            </ul>
        </div>
    )
}
