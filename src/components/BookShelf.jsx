import BooksGrid from "./BooksGrid";

const BookShelf = ({ bookShelfTitle }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid />
      </div>
    </div>
  );
};

export default BookShelf;
