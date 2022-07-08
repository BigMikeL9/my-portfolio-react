import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>Page Not Found 😭</h1>

      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFoundPage;
