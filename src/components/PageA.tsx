import { Link } from "react-router-dom";

const PageA = () => {
  return (
    <div>
      <h2>Page A</h2>
      <Link to="/b">Go to Page B</Link>
    </div>
  );
};

export default PageA;
