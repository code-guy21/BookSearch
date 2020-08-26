import React from "react";

const Book = (props) => {
  console.log(props);
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
          <button href="#" className="btn btn-danger">
            {props.saved ? "Delete" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
