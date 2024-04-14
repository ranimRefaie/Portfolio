import { useContext, useState } from "react";
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from "../MobileNav/MobileNav";
import { IoClose } from "react-icons/io5";
import BottonTheme from "../BottonTheme/BottonTheme";
import { ThemeContext } from "../../Contexts/Themes";
import Logo from "../Logo/Logo";
import DataNav from "../../Data/DataNav";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <motion.div
      initial={{ y: "-10vw" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 30 }}
    >
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="nav-wrapper">
        <div className="nav-content">
          <Logo />
          <ul
            style={{
              backgroundColor: theme.backgroundColor,
            }}
          >
            {DataNav.map((item) => (
              <li key={item.id}>
                <Link
                  style={{
                    color: theme.color,
                  }}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                >
                  {item.item}
                </Link>
              </li>
            ))}
          </ul>
          <BottonTheme className="btn-mode" />
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <IoClose /> : <FiAlignJustify />}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
