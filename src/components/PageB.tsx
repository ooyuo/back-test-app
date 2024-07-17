import React from "react";
import { Link } from "react-router-dom";

const PageB = () => {
  return (
    <div>
      <h2>Page B</h2>
      <Link to="/c">Go to Page C</Link>
    </div>
  );
};

export default PageB;
