import { To, useNavigate } from "react-router-dom";

const useCleanNavigation = () => {
  const navigate = useNavigate();

  const navigateClean = (path: To) => {
    navigate(path, { replace: true }); // Ensure navigation does not add to history
  };

  return navigateClean;
};

export default useCleanNavigation;
