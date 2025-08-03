"use client"

import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav className={styles.navbar} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Mitanshu Goel
          </motion.span>
        </Link>

        <div className={styles.desktop}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ""}`}
            >
              <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        className={`${styles.mobile} ${isOpen ? styles.open : ""}`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.mobileLink} ${location.pathname === item.path ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
