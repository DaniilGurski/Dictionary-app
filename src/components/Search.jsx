import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/images/icon-search.svg";

export default function Search() {
    const [searchValue, setSearchValue] = useState(""); 
    const [formValid, setFormValid] = useState(true);
    const navigate = useNavigate();

    function passSearch(e) {
        e.preventDefault();

        if (searchValue === "") {
            return setFormValid(false);
        }

        setFormValid(true)
        navigate(`${searchValue}`);
    }

    return (
        <form>
            <div 
            className={`search-bar fs-heading-s ${!formValid ? "error" : ""}`}
            aria-live="polite">
                <input 
                type="search" 
                value={searchValue} 
                placeholder="Search for any word..." 
                aria-errormessage="error-message"
                aria-invalid={!formValid}
                onChange={(e) => setSearchValue(e.target.value)}
                />

                <button 
                className="icon-button" 
                aria-label="search for a word"
                onClick={passSearch}>
                    <img src={searchIcon} alt="" />
                </button>
            </div>

            {!formValid && <span className="clr-error" id="error-message"> Whoops, can't be empty... </span>}
        </form>
    )
}
