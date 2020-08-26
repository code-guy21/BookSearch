import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BookContext from "../../utils/BookContext";
import API from "../../utils/API";

const Nav = () => {
  const bookContext = useContext(BookContext);

  useEffect(() => {
    API.getBooks()
      .then((books) => {
        bookContext.saved.set(books.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link">
              Search
            </Link>

            <Link to="/saved" className="nav-link">
              Saved
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
