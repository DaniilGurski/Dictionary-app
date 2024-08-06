import searchIcon from "../assets/images/icon-search.svg";

export default function Search() {
    return (
        <form>
            <div className="search-bar">
                <input type="search" />
                <button aria-label="search for a word">
                    <img src={searchIcon} alt="" />
                </button>
            </div>
        </form>
    )
}
