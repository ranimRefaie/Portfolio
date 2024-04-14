import "./Projects.css";
import CardProject from "../CardProject/CardProject";
import Data from "../../Data/Data";
import TitleSection from "../TitleSection/TitleSection";
const Projects = () => {
  return (
    <div id="projects" className=" projects-container">
      <TitleSection title="My Projects" />
      <div
        className="projects-cards"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          margin: " auto",
          gap: "2rem",
        }}
      >
        {Data.map((item) => (
          <div key={item.id}>
            <CardProject
              title={item.title}
              desc={item.desc}
              img={item.img}
              demo={item.demo}
              git={item.git}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
