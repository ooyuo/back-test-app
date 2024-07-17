import { To, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleCustomNavigation = (path: To) => {
    navigate(path, { replace: true }); // Navigate to the new path without adding to history
  };

  return (
    <header>
      <button onClick={() => handleCustomNavigation("/c")}>Navigate</button>
      <h1>Hello world</h1>
    </header>
  );
};

export default Header;
