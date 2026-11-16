import { useEffect } from "react";
import Book from "./Book";

/**
 * @description The books grid component that is composed of an ordered list of book components
 * @param {Object} props
 * @param {Object[]} props.books - The list of books to display in the grid
 * @returns {JSX.Element} The JSX for the books grid component
 */
const BooksGrid = ({ books }) => {
  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <ol className="books-grid">
      {Object.keys(books).length > 0 &&
        books?.map((book) => (
          <li key={book.id}>
            <Book
              bookTitle={book.title}
              bookAuthors={book.authors}
              bookImageURL={book.imageLinks?.thumbnail}
            />
          </li>
        ))}
    </ol>
  );
};

export default BooksGrid;
