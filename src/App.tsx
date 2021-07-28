import React from "react";
import { Link, Route, Router, Switch } from "wouter";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="whole">
      <header>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </main>
      <footer>
        <ul>
          <li>Reference</li>
          <li>API</li>
          <li>Help</li>
        </ul>
        <ul>
          <li>Github</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
