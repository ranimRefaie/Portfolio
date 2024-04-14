import "./ButtonDownload.css";
import { motion } from "framer-motion";
import { FaCloudArrowDown } from "react-icons/fa6";
const ButtonDownload = ({ text }) => {
  return (
    <motion.button className="btn-cv" whileInView={{ scale: 1.1 }}>
      <FaCloudArrowDown className="icon" />
      <span>{text}</span>
    </motion.button>
  );
};

export default ButtonDownload;
