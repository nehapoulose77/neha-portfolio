import { motion } from "framer-motion";
import {
  Calendar,
  Sparkles,
  ExternalLink,
  Github,
  Award,
  Layers,
  CheckCircle2,
  Lock,
  FileCheck2,
  FolderGit2
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section-container" id="projects">
      <SectionHeading
        eyebrow="FEATURED WORK"
        title="Projects"
        description="Applied engineering projects encompassing Generative AI, full-stack web applications, and predictive machine learning models."
      />

      <div className="projects-grid">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.id}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              {/* Header: Project Number, Icon, and Duration */}
              <div className="project-header">
                <div className="project-badge-group">
                  <span className="project-index">PROJECT {project.number}</span>
                  <span className="project-category-tag">{project.category}</span>
                </div>
                <div className="project-icon-box">
                  <Icon size={22} />
                </div>
              </div>

              {/* Title and Duration */}
              <div className="project-title-wrap">
                <h3 className="project-title">{project.title}</h3>
                {project.duration && (
                  <div className="project-duration-chip">
                    <Calendar size={13} />
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>

              {/* Special Honors (if any, like HIRE AI's Fellowship & Paper) */}
              {project.honors && project.honors.length > 0 && (
                <div className="project-honors-list">
                  {project.honors.map((honor, i) => (
                    <div key={i} className="project-honor-chip">
                      <Award size={14} className="honor-icon" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Description Bullets */}
              <div className="project-description-wrap">
                <ul className="project-desc-list">
                  {project.description.map((point, i) => (
                    <li key={i} className="project-desc-item">
                      <span className="desc-bullet-dot"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Badges */}
              <div className="project-tech-section">
                <span className="tech-section-label">Technology Stack:</span>
                <div className="tech-badge-container">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Conditional GitHub button or verified status */}
              <div className="project-card-footer">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <div className="project-status-box">
                    <FileCheck2 size={15} className="status-box-icon" />
                    <span className="project-status-text">{project.statusNote}</span>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

