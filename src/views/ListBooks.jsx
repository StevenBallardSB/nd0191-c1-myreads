import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";

const ListBooks = ({ userBooks }) => {
  const currentlyReadingBooks = userBooks.filter(
    (book) => book.shelf == "currentlyReading",
  );
  const wantToReadBooks = userBooks.filter(
    (book) => book.shelf == "wantToRead",
  );
  const readBooks = userBooks.filter((book) => book.shelf == "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            bookShelfTitle={"Currently Reading"}
            books={currentlyReadingBooks}
          />
          <BookShelf bookShelfTitle={"Want to Read"} books={wantToReadBooks} />
          <BookShelf bookShelfTitle={"Read"} books={readBooks} />
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
