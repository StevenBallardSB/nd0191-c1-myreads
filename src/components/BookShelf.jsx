import BooksGrid from "./BooksGrid";

/**
 * @description The bookshelf component that is composed of the title of the book shelf and a books grid component
 * @typedef {Object} BookShelfProps
 * @property {string} props.bookShelfTitle - The name of the bookshelf
 * @property {Object[]} props.books - The array of books that are on the bookshelf
 * @param {BookShelfProps} props - bookShelfTitle: string, books: Object[]
 * @returns {JSX.Element} The JSX for the bookshelf component
 */
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
