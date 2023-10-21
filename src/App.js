import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Counters from "./customHooks/counter";
import FourzeroFourPage from "./routes/FourzeroFourPage";
import Homepage from "./routes/homepage";
import ErrorBoundary from "./routes/ErrorBoundary";
import ErrorBoundaryTest from "./routes/ErrorBoundaryTest";
function App() {
  return (
    <div className="appcon">
      <ErrorBoundary>
        <ul className="navlink">
          <li className="links">
            <Link className="linksto home" to="/">
              Home page{" "}
            </Link>
          </li>
          <li className="links countLink">
            <Link className="linksto" to="/counter">
              Counter page
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/error">
              Error page
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/counter" element={<Counters />} />
          <Route path="/error" element={<ErrorBoundaryTest />} />
          <Route path="*" element={<FourzeroFourPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
export default App;
