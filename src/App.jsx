import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ListBooks />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
