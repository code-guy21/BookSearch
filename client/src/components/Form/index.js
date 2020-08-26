import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";
import API from "../../utils/API";

const Form = () => {
  const bookContext = useContext(BookContext);

  const searchBooks = () => {
    if (bookContext.search.value) {
      API.searchBooks(bookContext.search.value)
        .then((books) => {
          if (books.data.items) {
            let ordered = books.data.items.reduce((obj, book) => {
              obj.push({
                authors: book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(",")
                  : "No Authors",
                description: book.volumeInfo.description
                  ? book.volumeInfo.description
                  : "No Description",
                image: book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : `https://via.placeholder.com/128x190`,
                link: book.volumeInfo.infoLink,
                title: book.volumeInfo.title,
                saved: false,
                bookId: book.id,
              });
              return obj;
            }, []);

            bookContext.books.set(ordered);
          } else {
            bookContext.books.set([]);
          }
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
