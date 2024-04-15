import "./ButtonDownload.css";
import { motion } from "framer-motion";
import { FaCloudArrowDown } from "react-icons/fa6";

const ButtonDownload = ({ text }) => {
  return (
    <motion.a
      className="btn-cv"
      whileInView={{ scale: 1.1 }}
      href="https://ranimrefaie.github.io/portfolio/ranim_alrefaie.pdf"
      download="ranim.pdf"
    >
      <FaCloudArrowDown className="icon" />
      <span>{text}</span>
    </motion.a>
  );
};

export default ButtonDownload;
