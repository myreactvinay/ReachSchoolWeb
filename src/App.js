import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clock from "./Components/Clock";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/ReachSchoolWeb" className="navbar-brand">
          React School
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/ReachSchoolWeb">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ReachSchoolWeb/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <Switch>
        <Route exact={true} path="/ReachSchoolWeb" component={Home}></Route>
        <Route path="/ReachSchoolWeb/about" component={About}></Route>
      </Switch>
      <footer class="container text-left py-3 border-top">
        <p>© React School {new Date().getFullYear()}</p>
        <Clock />
      </footer>
    </Router>
  );
}

export default App;
