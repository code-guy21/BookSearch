import React, { useContext } from "react";
import API from "../../utils/API";
import BookContext from "../../utils/BookContext";

const Book = (props) => {
  const bookContext = useContext(BookContext);

  const handleDelete = () => {
    API.deleteBook(props.id)
      .then((resp) => {
        let filtered = Object.entries(bookContext.saved.value)
          .filter((book) => {
            return book[0] !== props.id;
          })
          .reduce((obj, book) => {
            obj[book[0]] = { ...book[1] };
            return obj;
          }, {});

        bookContext.saved.set(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = () => {
    API.saveBook({ ...props, saved: true })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(resp);
      });
  };
  return (
    <div className="col-12">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">
            <small className="text-muted">Written By: {props.authors}</small>
          </p>
          <p className="card-text">{props.description}</p>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View
          </a>
          <button
            onClick={() => {
              props.saved ? handleDelete() : handleSave();
            }}
            className="btn btn-danger"
          >
            {props.saved ? "Delete" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
