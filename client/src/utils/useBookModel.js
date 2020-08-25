import { useState } from "react";

const useBookModel = () => {
  const [bookState, setBooks] = useState([]);

  return {
    books: {
      value: bookState,
      set: (books) => setBooks({ ...bookState, ...books }),
    },
  };
};

export default useBookModel;
