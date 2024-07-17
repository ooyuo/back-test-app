import useCleanNavigation from "../hooks/useCleanNavigation";

const PageD = () => {
  const navigateClean = useCleanNavigation();
  return (
    <div>
      <h2>Page D</h2>
      <button onClick={() => navigateClean("/d")}>Go to Page D</button>
    </div>
  );
};

export default PageD;
