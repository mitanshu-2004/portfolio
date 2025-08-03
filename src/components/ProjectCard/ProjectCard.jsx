"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import styles from "./ProjectCard.module.css"

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
    >
      <div className={styles.imageWrapper}>
        <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {project.github && (
              <motion.a
                href={project.github}
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                className={styles.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
