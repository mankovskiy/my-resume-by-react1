import '../../styles/style.css';

export const Projects = () => {
  return (
    <main>
      <section className="project">
        <div className="container">
          <div className="project-details">
            <h1 className="section-title">Video service</h1>
            <img
              className="project-ditals__cover"
              src="./images/proj-dit.jpg"
              alt=""
            />
            <div className="project-ditales__descript">
              <p>Skills: React, Node.js, MongoDB</p>
            </div>
            <a href="#!" className="buton-outline">
              <img src="./images/git.svg" alt="" />
              GitHub repo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
