import "./ButtonDownload.css";
import { motion } from "framer-motion";
import { FaCloudArrowDown } from "react-icons/fa6";

const PDF_File_URL = "http://localhost:5173/portfolio/ranim_alrefaie.pdf";

const ButtonDownload = ({ text }) => {
  const downloadFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <motion.button
      className="btn-cv"
      whileInView={{ scale: 1.1 }}
      onClick={() => {
        downloadFile(PDF_File_URL);
      }}
    >
      <FaCloudArrowDown className="icon" />
      <span>{text}</span>
    </motion.button>
  );
};

export default ButtonDownload;
