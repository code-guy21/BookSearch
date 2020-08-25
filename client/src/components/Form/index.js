import React from "react";

const Form = () => {
  return (
    <form className="container">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Moby Dick..."
        />
        <button type="submit" className="btn btn-primary my-2">
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
