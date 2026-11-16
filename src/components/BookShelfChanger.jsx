/**
 * @description The BookShelfChanger component which is composed of a select element with options to change the bookshelf for the book
 * @returns {JSX.Element} The JSX for the book shelf changer component
 */
const BookShelfChanger = () => {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
