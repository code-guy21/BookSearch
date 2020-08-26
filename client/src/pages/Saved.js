import React, { useEffect, useContext } from "react";
import API from "../utils/API";
import BookContext from "../utils/BookContext";
import BookList from "../components/BookList";

const Saved = () => {
  const bookContext = useContext(BookContext);

  useEffect(() => {
    API.getBooks()
      .then((books) => {
        console.log(books);
        bookContext.saved.set(books.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <BookList data={bookContext.saved.value} />;
};

export default Saved;
