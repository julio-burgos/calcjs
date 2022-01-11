import "styles/App.css";
import { Route, Router } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={Home} />
      </main>
    </Router>
  );
}

export default App;
