import React from "react";
import { Link } from "react-router-dom";

const PageC = () => {
  return (
    <div>
      <h2>Page C</h2>
      <Link to="/d">Go to Page D</Link>
    </div>
  );
};

export default PageC;
