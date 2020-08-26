import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";
import API from "../../utils/API";

const Form = () => {
  const bookContext = useContext(BookContext);

  const searchBooks = () => {
    if (bookContext.search.value) {
      API.searchBooks(bookContext.search.value)
        .then((books) => {
          bookContext.books.set(
            books.data.items.reduce((obj, book) => {
              obj[book.id] = {
                id: book.id,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description
                  ? book.volumeInfo.description
                  : "No Description",
                image: book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : `https://via.placeholder.com/128x190`,
                link: book.volumeInfo.infoLink,
                title: book.volumeInfo.title,
                saved: false,
              };
              return obj;
            }, {})
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form
      className="container d-flex mb-3 justify-content-center"
      onSubmit={(e) => {
        e.preventDefault();
        searchBooks();
      }}
    >
      <input
        type="text"
        style={{ width: "63%" }}
        className="form-control"
        placeholder="Moby Dick..."
        {...bookContext.search}
      />
      <button onClick={searchBooks} type="button" className="btn btn-primary ">
        Search
      </button>
    </form>
  );
};

export default Form;
