import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./views/ListBooks";
import SearchBooks from "./views/SearchBooks";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

/**
 * @description The parent component that sets up routing and react states for child components to use
 * @returns {JSX.Element} The routes for the App
 */
function App() {
  const [userBooks, setUserBooks] = useState([{}]);

  /**
   * @description Used to call the BooksAPI getAll function and set the userBooks state to the response
   */
  const getAllBooks = async () => {
    const response = await BooksAPI.getAll();
    setUserBooks(response);
  };

  /**
   * @description Used to call the BooksAPI update function and update the shelf location of a book
   * @param {Object} book - The book being updated
   * @param {String} shelf - The shelf the book is being updated to be on
   */
  const updateBookShelfLocation = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      getAllBooks();
    };

    update();
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<ListBooks userBooks={userBooks} />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
