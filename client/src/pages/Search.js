import React, { useContext } from "react";
import Form from "../components/Form";
import BookList from "../components/BookList";
import BookContext from "../utils/BookContext";

const Search = () => {
  const bookContext = useContext(BookContext);

  return (
    <>
      <Form />
      <BookList data={bookContext.books.value} />
    </>
  );
};

export default Search;
