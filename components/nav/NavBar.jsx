import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navegation";
import { useRef } from "react";
import "./stylesNav.css";
/* import { useDimensions } from "./use-dimensions"; */

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  /* const { height } = useDimensions(containerRef); */

  return (
    <motion.nav
      className="nav-navbar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      /* custom={height} */
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default NavBar;
