// import './projects.css';
// import '../../styles/main.css';
import '../../styles/style.css';

import { Project } from 'components/Project/Project';
import { projects } from '../../dataProjects/projects';

export const Projects = () => {
  return (
    <main>
      <section className="projects">
        <div className="container">
          <h2 className="projects__title">Projects</h2>
          <ul className="projects__list">
            {projects.map(({ title, id, img }) => {
              return <Project title={title} key={id} img={img} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};
