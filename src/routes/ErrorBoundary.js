import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style.css";
import Homepage from "./homepage";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="errorContainer">
            <i className="errorpage">Oops...</i>
            <h1 className="errorpage">
              {" "}
              Something went wrong. <span>😥</span>{" "}
            </h1>
            <a className="a" href="/">
              Back to home page
            </a>
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
