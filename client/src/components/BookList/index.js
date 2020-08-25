import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";
import Book from "../Book";

const BookList = () => {
  const bookContext = useContext(BookContext);

  return (
    <div className="container">
      {Object.values(bookContext.books.value).map((book, i) => {
        return (
          <Book
            key={i}
            id={book._id}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            title={book.title}
          />
        );
      })}
    </div>
  );
};

export default BookList;
