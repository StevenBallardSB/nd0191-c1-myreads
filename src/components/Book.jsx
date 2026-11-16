import BookShelfChanger from "./BookShelfChanger";

/**
 * @description The book component which is composed of book details and a book shelf changer component
 * @typedef {Object} BookProps
 * @property {string} props.bookTitle - The name of the book
 * @property {string[]} props.bookAuthors - An array of authors of the book
 * @property {string} props.bookImageURL - The image url for the cover of the book
 * @param {BookProps} props - bookTitle: string, bookAuthors: string[], bookImageURL: string
 * @returns {JSX.Element} The JSX for the book component
 */
const Book = ({ bookTitle, bookAuthors, bookImageURL }) => {
  function formatAuthors() {
    let formattedAuthorsArray = "";
    if (bookAuthors != undefined) {
      for (let i = 0; i < bookAuthors.length; i++) {
        formattedAuthorsArray += bookAuthors[i];
        // add comma to authors name if not the last author in the array
        formattedAuthorsArray += i + 1 != bookAuthors.length ? ", " : "";
      }
    }
    return formattedAuthorsArray;
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookImageURL})`,
          }}
        ></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{formatAuthors()}</div>
    </div>
  );
};

export default Book;
