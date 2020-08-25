import { useState } from "react";

const useBookModel = () => {
  const [bookState, setBooks] = useState([
    "Harry Potter",
    "Great Expectations",
  ]);

  return {
    books: {
      value: bookState,
      onClick: (books) => setBooks({ ...bookState, ...books }),
    },
  };
};

export default useBookModel;
