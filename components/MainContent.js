const MainContent = () => {
  return (
    <main id="home">
      <h3 className="lg-heading" id="top-heading">
        <span>Hey</span>,
      </h3>
      <h3 className="lg-heading">
        My Name is <span className="homeName">Dmitriy</span>.
      </h3>
      <h2 className="sm-heading">
        Web <span className="text-light">/</span> Mobile App{" "}
        <span className="emphasis">Developer</span>
      </h2>
      <div className="icons">
        <a
          aria-label="Linked In Page"
          target="_blank"
          href="https://www.linkedin.com/in/dmitriy-sharshiner-35897626/"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a
          aria-label="Github Page"
          target="_blank"
          href="https://github.com/Dmitri801"
        >
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default MainContent;
