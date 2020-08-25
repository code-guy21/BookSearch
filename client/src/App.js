import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import BookContext from "./utils/BookContext";
import useBookModel from "./utils/useBookModel";

function App() {
  const bookModel = useBookModel();
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <BookContext.Provider value={bookModel}>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </BookContext.Provider>
    </Router>
  );
}

export default App;
