import "../styles/Header.css"
import arith_logo from "../assets/arith_logo.svg"
import info_icon from "../assets/info_icon.svg"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
      <div className="header_info">
        <img src={arith_logo} className={isDesktop ? "arith_logo" : "arith_logo_mobile"} />
        <a href="#info"><img src={info_icon} className={isDesktop ? "info_icon" : "info_icon_mobile"} /></a>
      </div>
      <hr className={isDesktop ? "hr" : "hr_mobile"}></hr>
    </motion.div>
  )
}

export default Header;