import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="data">
        <Header />
        <MainContent />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
