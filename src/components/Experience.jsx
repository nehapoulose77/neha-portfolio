import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
  ChevronRight
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCES } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section-container" id="experience">
      <SectionHeading
        eyebrow="CAREER JOURNEY"
        title="Internship Experience"
        description="Hands-on industry exposure in software quality assurance, test automation, and Python-based data science workflows."
      />

      <div className="timeline-container">
        {/* Central glowing vertical timeline track */}
        <div className="timeline-track"></div>

        <div className="timeline-list">
          {EXPERIENCES.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
              >
                {/* Timeline node with icon */}
                <div className="timeline-marker">
                  <div className="marker-dot">
                    <Briefcase size={16} />
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="timeline-card glass-panel">
                  <div className="card-top-row">
                    <div className="role-and-org">
                      <div className="badge-row">
                        <span className="experience-type-badge">{exp.periodType}</span>
                        <span className="experience-specialty-badge">{exp.badge}</span>
                      </div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <div className="org-meta">
                        <span className="timeline-company">
                          <Building2 size={15} />
                          {exp.organization}
                        </span>
                        <span className="timeline-location">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="timeline-date-chip">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="responsibilities-section">
                    <h4 className="responsibilities-title">Key Responsibilities & Contributions:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="responsibility-item">
                          <CheckCircle2 size={16} className="resp-bullet-icon" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applied Skills Badges */}
                  <div className="exp-skills-row">
                    <span className="exp-skills-label">Tools & Competencies:</span>
                    <div className="exp-skills-tags">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="skill-pill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

