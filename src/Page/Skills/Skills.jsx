// import './skills.css';
import '../../styles/style.css';

export const Skills = () => {
  return (
    <main>
      <section className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <h3 className="section-title__point">Frontend</h3>
          <p className="section-title__text">
            JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
            BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
          </p>
          <h3 className="section-title__point">Backend</h3>
          <p className="section-title__text">
            NodeJS, MySQL, MongoDB, PHP, Laravel
          </p>
        </div>
      </section>
    </main>
  );
};
