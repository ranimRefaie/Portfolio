import "./Hero.css";
import my_photo from "../../assets/profile-2.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Themes";
import ButtonHire from "../ButtonHire/ButtonHire";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ButtonShow from "../ButtonShow/ButtonShow";

const Hero = () => {
  const [{ isDark }] = useContext(ThemeContext);

  const [typeEffect] = useTypewriter({
    words: ["Ranim Alrefaie", "Front End Developer"],
    loop: 10,
    typeSpeed: 200,
    deleteSpeed: 40,
  });

  return (
    <motion.section
      className={isDark ? "hero-container dark" : "hero-container light"}
    >
      <motion.div
        className="hero-content"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 40 }}
      >
        <h2 style={{ width: "auto", height: "5rem" }}>
          Hello, I'm
          <span>{typeEffect}</span>
        </h2>
        <p>
          Elevating user experiences through responsive frontend development
        </p>

        <SocialMediaIcons />

        <div className="buttons-hero" style={{ display: "flex", gap: "2rem" }}>
          <ButtonShow />
          <ButtonHire />
        </div>
      </motion.div>

      <motion.div
        className="my-photo"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1, duration: 1, type: "spring", stiffness: 40 }}
      >
        <img src={my_photo} alt="Ranim Alrefaie" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
