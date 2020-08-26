import React from "react";
import Book from "../Book";

const BookList = ({ data }) => {
  return (
    <div className="container">
      {Object.values(data).map((book, i) => {
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
