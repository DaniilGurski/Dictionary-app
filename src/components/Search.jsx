import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    function passSearch(e) {
        e.preventDefault();
        navigate(`${searchValue}`);
    }

    return (
        <form>
            <div className="search-bar">
                <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

                <button 
                className="icon-button" 
                aria-label="search for a word"
                onClick={passSearch}>
                    <img src={searchIcon} alt="" />
                </button>
            </div>
        </form>
    )
}
