import React, { useState } from "react";
import "../style.css";
function Homepage() {
  return (
    <>
      <h1 className="homepage">Welcome to my home page</h1>
      <p style={{textAlign:'center'}}>
        This project is a simple React application that demonstrates the
        creation of a custom counter hook with functions for increment,
        decrement, reset, and setting a value. It also includes a user interface
        for the counter. Additionally, it implements routing for different
        pages, including a custom counter page, a 404 page for handling unknown
        routes, and a page to test error boundary handling.{" "}
      </p>
    </>
  );
}
export default Homepage;
