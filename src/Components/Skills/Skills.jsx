import "./Skills.css";
import Data from "../../Data/DataSkill";
import { IoBookOutline } from "react-icons/io5";
import { ProgressBar } from "react-bootstrap";
import TitleSection from "../TitleSection/TitleSection";

const Skills = () => {
  return (
    <div style={{ width: "80%", margin: "8rem auto" }}>
      <TitleSection title="My Skill" />
      <div className="skills-container">
        <div className="skill-content-1">
          {Data.map((item) => (
            <div className="skill-box" key={item.id}>
              <span className="title">{item.title}</span>
              <div className="skill-bar">
                <span className="skill-per" style={{ width: item.percent }}>
                  <span className="tooltip">{item.percent}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-content-2">
          <div className="info">
            <div className="title">
              <h2>Language</h2>
            </div>
            <p style={{ margin: "0.66rem" }}>English</p>
            <ProgressBar variant="" now={60} />
          </div>

          <div className="info">
            <div className="title">
              <h2>Studies</h2>
            </div>
            <div className="studies">
              <IoBookOutline className="icon" />
              <div className="student-info">
                <p>Syrian Virtual University</p>
                <span>ITE 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
