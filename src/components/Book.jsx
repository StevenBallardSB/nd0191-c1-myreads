import BookShelfChanger from "./BookShelfChanger";

const Book = ({ bookTitle, bookAuthors, bookImageURL }) => {
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
      <div className="book-authors">{bookAuthors}</div>
    </div>
  );
};

export default Book;
