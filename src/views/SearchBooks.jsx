import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

/**
 * @description The view for the SearchBooks page which is composed of a search bar and a books grid component
 * @returns {JSX.Element} The JSX for the search books page
 */
const SearchBooks = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    /**
     * @description Used to call the BooksAPI search function with the users input and update the searchResults state with the response
     */
    const getSearchResults = async () => {
      // TODO: Sanitize the searchInput string before passing it into backend API call.
      const response =
        searchInput != "" ? await BooksAPI.search(searchInput) : [];
      setSearchResults(response);
    };

    getSearchResults();
  }, [searchInput]);

  return (
    <div className="search-books">
      {/* TODO: Refactor search bar into it's own component */}
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
      <div className="search-books-results">
        <BooksGrid books={searchResults} />
      </div>
    </div>
  );
};

export default SearchBooks;
