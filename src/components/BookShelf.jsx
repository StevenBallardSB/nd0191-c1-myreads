import BooksGrid from "./BooksGrid";

const BookShelf = ({ bookShelfTitle, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} />
      </div>
    </div>
  );
};

export default BookShelf;
