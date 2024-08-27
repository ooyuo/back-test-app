import useCleanNavigation from "../hooks/useCleanNavigation";

const PageA = () => {
  const navigateClean = useCleanNavigation();
  return (
    <div>
      <h2>Page A</h2>
      <button onClick={() => navigateClean("/b")}>Go to Page B</button>

      <header>
        <h1>Welcome to My Website</h1>
        <p>This is a sample header</p>
      </header>

      <main>
        <h2>Main Content Area</h2>
        <p>This is the main content area. Scroll down to see more content.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet nisi massa. Fusce malesuada felis sed velit placerat, eget
          vulputate neque pharetra. Morbi sed leo ac risus tempor sollicitudin.
          Quisque pharetra turpis sed sapien fringilla, at interdum nisi tempor.
          Nullam facilisis justo ut ligula facilisis cursus. Morbi a urna a leo
          tempus eleifend. Aenean sed turpis vel dui ultricies pharetra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet nisi massa. Fusce malesuada felis sed velit placerat, eget
          vulputate neque pharetra. Morbi sed leo ac risus tempor sollicitudin.
          Quisque pharetra turpis sed sapien fringilla, at interdum nisi tempor.
          Nullam facilisis justo ut ligula facilisis cursus. Morbi a urna a leo
          tempus eleifend. Aenean sed turpis vel dui ultricies pharetra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet nisi massa. Fusce malesuada felis sed velit placerat, eget
          vulputate neque pharetra. Morbi sed leo ac risus tempor sollicitudin.
          Quisque pharetra turpis sed sapien fringilla, at interdum nisi tempor.
          Nullam facilisis justo ut ligula facilisis cursus. Morbi a urna a leo
          tempus eleifend. Aenean sed turpis vel dui ultricies pharetra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet nisi massa. Fusce malesuada felis sed velit placerat, eget
          vulputate neque pharetra. Morbi sed leo ac risus tempor sollicitudin.
          Quisque pharetra turpis sed sapien fringilla, at interdum nisi tempor.
          Nullam facilisis justo ut ligula facilisis cursus. Morbi a urna a leo
          tempus eleifend. Aenean sed turpis vel dui ultricies pharetra.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet nisi massa. Fusce malesuada felis sed velit placerat, eget
          vulputate neque pharetra. Morbi sed leo ac risus tempor sollicitudin.
          Quisque pharetra turpis sed sapien fringilla, at interdum nisi tempor.
          Nullam facilisis justo ut ligula facilisis cursus. Morbi a urna a leo
          tempus eleifend. Aenean sed turpis vel dui ultricies pharetra.
        </p>
      </main>

      <footer>
        <p>Footer Content &copy; 2024</p>
      </footer>
    </div>
  );
};

export default PageA;
