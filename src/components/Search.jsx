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
            className={`search-bar fs-heading-s ${!formValid ? "error" : ""}`}>
                <input 
                type="search" 
                value={searchValue} 
                placeholder="Search for any word..." 
                aria-describedby="error-message"
                aria-invalid={!formValid}
                aria-label="search bar"
                onChange={(e) => setSearchValue(e.target.value)}
                />

                <button 
                className="icon-button" 
                aria-label="search for a word"
                onClick={passSearch}>
                    <img src={searchIcon} alt="" />
                </button>
            </div>

            <div aria-live="assertive" id="error-message" lang="en">
                {!formValid && <span className="clr-error"> Whoops, can't be empty... </span>}
            </div>
        </form>
    )
}
