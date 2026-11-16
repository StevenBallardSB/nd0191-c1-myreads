import BooksGrid from "../components/BooksGrid";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import SearchBar from "../components/SearchBar";

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
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="search-books-results">
        <BooksGrid books={searchResults} />
      </div>
    </div>
  );
};

export default SearchBooks;
