import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./views/ListBooks";
import SearchBooks from "./views/SearchBooks";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [userBooks, setUserBooks] = useState([{}]);

  const getAllBooks = async () => {
    const response = await BooksAPI.getAll();
    setUserBooks(response);
  };

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
