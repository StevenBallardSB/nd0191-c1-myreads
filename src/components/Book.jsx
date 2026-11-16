import BookShelfChanger from "./BookShelfChanger";

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
