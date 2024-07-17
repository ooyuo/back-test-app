import useCleanNavigation from "../hooks/useCleanNavigation";

const PageB = () => {
  const navigateClean = useCleanNavigation();
  return (
    <div>
      <h2>Page B</h2>
      <button onClick={() => navigateClean("/c")}>Go to Page C</button>
    </div>
  );
};

export default PageB;
