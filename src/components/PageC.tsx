import useCleanNavigation from "../hooks/useCleanNavigation";

const PageC = () => {
  const navigateClean = useCleanNavigation();
  return (
    <div>
      <h2>Page C</h2>
      <button onClick={() => navigateClean("/d")}>Go to Page D</button>
    </div>
  );
};

export default PageC;
