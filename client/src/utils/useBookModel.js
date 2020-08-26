import { useState } from "react";

const useBookModel = () => {
  const [bookState, setBooks] = useState([]);
  const [savedState, setSaved] = useState([]);
  const [searchState, setSearch] = useState("");

  return {
    books: {
      value: bookState,
      set: (books) => setBooks([...books]),
    },
    saved: {
      value: savedState,
      set: (books) => setSaved([...books]),
    },
    search: {
      value: searchState,
      onChange: (e) => setSearch(e.target.value),
    },
  };
};

export default useBookModel;
