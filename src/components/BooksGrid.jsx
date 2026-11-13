import { useEffect } from "react";
import Book from "./Book";

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
              bookImageURL={book.imageLinks.thumbnail}
            />
          </li>
        ))}
    </ol>
  );
};

export default BooksGrid;
