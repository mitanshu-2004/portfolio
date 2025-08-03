"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Database, Zap } from "lucide-react"
import styles from "./About.module.css"

const About = () => {
  const expertise = [
    {
      icon: Cpu,
      title: "Robotics & ROS",
      description: "Developing autonomous systems and robotic applications using ROS framework",
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Building intelligent systems with deep learning and computer vision",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Creating scalable web applications with modern technologies",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing efficient data pipelines and analytics solutions",
    },
  ]

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I'm a passionate technologist with expertise in robotics, artificial intelligence, and full-stack
            development. I love building innovative solutions that bridge the gap between cutting-edge technology and
            real-world applications.
          </p>
        </motion.div>

        <div className={styles.expertise}>
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.expertiseCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>
                <item.icon size={32} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
