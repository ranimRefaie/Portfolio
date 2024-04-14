import "./AboutMe.css";
import about_1 from "../../assets/7.jpg";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import TitleSection from "../TitleSection/TitleSection";
import ButtonHire from "../ButtonHire/ButtonHire";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about" className="about-container">
      <TitleSection title="About Me" />
      <div className="content-about">
        <div className="left-about">
          <img src={about_1} alt="" />
        </div>
        <div className="right-about">
          <motion.p
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "spring",
              stiffness: 40,
            }}
          >
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, JavaScript, React and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </motion.p>
          <div
            className="buttons-about"
            style={{ display: "flex", gap: "2rem" }}
          >
            <ButtonDownload text="Download CV" />
            <ButtonHire />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
