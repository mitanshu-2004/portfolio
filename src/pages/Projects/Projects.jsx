"use client"

import { motion } from "framer-motion"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { projects } from "../../data/projects"
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <motion.div
      className={styles.projects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.description}>
            Here are some of the projects I've worked on, showcasing my expertise in robotics, AI/ML, and full-stack
            development.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
