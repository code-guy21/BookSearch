import React, { useEffect } from "react";
import API from "../utils/API";

const Saved = () => {
  useEffect(() => {
    API.getBooks()
      .then((books) => {
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>Saved</div>;
};

export default Saved;
