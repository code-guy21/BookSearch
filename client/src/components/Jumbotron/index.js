import React from "react";

const linkStyle = {
  color: "white",
};

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-light bg-transparent">
      <div className="container text-center">
        <h1 className="display-4">React Book Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
        <p>
          Powered by{" "}
          <a style={linkStyle} href="https://developers.google.com/books">
            Google Books API
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
