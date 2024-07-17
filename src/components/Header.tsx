import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <header>
      <button onClick={handleBackButtonClick}>뒤로가기</button>
      <h1>Hello world</h1>
    </header>
  );
};

export default Header;
