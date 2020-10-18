import React, { useContext } from "react";
import API from "../../utils/API";
import BookContext from "../../utils/BookContext";

const Book = (props) => {
  const bookContext = useContext(BookContext);

  const handleDelete = () => {
    API.deleteBook(props.id)
      .then((resp) => {
        let filtered = bookContext.saved.value.filter((book) => {
          return book._id !== props.id;
        });

        bookContext.saved.set(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = () => {
    API.saveBook({ ...props, saved: true })
      .then((resp) => {
        let filtered = bookContext.books.value.filter((book) => {
          return book.bookId !== props.bookId;
        });

        bookContext.books.set(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-12 ">
      <div
        style={{ background: "rgb(0 0 0 / 35%)" }}
        className="card mb-3 d-flex flex-row flex-wrap text-white"
      >
        <div className="card-header border-0 col-md-3 d-flex align-items-center justify-content-center">
          <img src={props.image} alt="book" style={{ height: "inherit" }} />
        </div>
        <div className="card-body col-md-9">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">
            <small className="text-white">Written By: {props.authors}</small>
          </p>
          <p className="card-text">{props.description}</p>
          <a
            style={{ background: "rgb(0 0 0 / 35%)" }}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View
          </a>
          <button
            style={{ background: "rgb(0 0 0 / 35%)" }}
            onClick={() => {
              props.saved ? handleDelete() : handleSave();
            }}
            className="btn btn-secondary"
          >
            {props.saved ? "Delete" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
