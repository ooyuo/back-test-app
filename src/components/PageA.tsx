import useCleanNavigation from "../hooks/useCleanNavigation";

const PageA = () => {
  const navigateClean = useCleanNavigation();
  return (
    <div>
      <h2>Page A</h2>
      <button onClick={() => navigateClean("/b")}>Go to Page B</button>
    </div>
  );
};

export default PageA;
