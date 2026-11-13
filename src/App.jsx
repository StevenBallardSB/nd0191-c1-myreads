import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./views/ListBooks";
import SearchBooks from "./views/SearchBooks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ListBooks />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
