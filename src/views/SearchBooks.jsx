import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getSearchResults = async () => {
      const response =
        searchInput != "" ? await BooksAPI.search(searchInput) : [];
      setSearchResults(response);
      console.log(response);
    };

    getSearchResults();
  }, [searchInput]);

  return (
    <div className="search-books">
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
        <BooksGrid />
      </div>
    </div>
  );
};

export default SearchBooks;
