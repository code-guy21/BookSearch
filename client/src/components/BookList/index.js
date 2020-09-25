import React from "react";
import Book from "../Book";

const BookList = ({ data }) => {
  return (
    <div className="container">
      {data.map((book, i) => {
        return (
          <Book
            key={i}
            id={book._id}
            bookId={book.bookId}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            title={book.title}
            saved={book.saved}
          />
        );
      })}
    </div>
  );
};

export default BookList;
