import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";

const SearchBooks = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid />
      </div>
    </div>
  );
};

export default SearchBooks;
