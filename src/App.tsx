import { Route, Router } from "wouter";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </main>
  );
}

export default App;
