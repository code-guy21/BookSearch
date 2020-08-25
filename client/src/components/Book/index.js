import React from "react";

const Book = (props) => {
  console.log(props);
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>

        <p className="card-text">
          <small className="text-muted">Written By: {props.authors}</small>
        </p>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          View
        </a>
        <button href="#" className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
};

export default Book;
