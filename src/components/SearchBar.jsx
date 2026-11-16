import { Link } from "react-router-dom";

/**
 * @description The search bar component which is composed of a link to close the search page and an input field for the user's search input
 * @typedef {Object} SearchBarProps
 * @property {string} props.searchInput - The value of the search query from the user
 * @property {Dispatch<SetStateAction<string>>} props.setSearchInput - The callback function to set the search input
 * @param {SearchBarProps} props - searchInput: string, setSearchInput: Dispatch<SetStateAction<string>>
 * @returns {JSX.Element} The JSX for the search bar component
 */
const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <div className="search-books-bar">
      <Link to={"/"} className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
