"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code, Cpu, Zap } from "lucide-react"
import styles from "./Hero.module.css"

const Hero = () => {
  const skills = [
    { icon: Cpu, label: "Robotics" },
    { icon: Zap, label: "AI/ML" },
    { icon: Code, label: "Fullstack Dev" },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className={styles.name}>Mitanshu Goel</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate about building intelligent systems and innovative solutions
          </motion.p>

          <motion.div
            className={styles.skills}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skills.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                className={styles.skill}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Icon size={24} />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button className={styles.ctaButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
