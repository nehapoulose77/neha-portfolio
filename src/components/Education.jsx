import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section-container" id="education">
      <SectionHeading
        eyebrow="ACADEMIC BACKGROUND"
        title="Education"
        description="Formal academic qualifications, institutional milestones, and scholastic achievements."
      />

      <div className="education-grid">
        {EDUCATION.map((item, index) => (
          <motion.div
            key={item.id}
            className="education-card glass-panel"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            {/* Top row with icon & date */}
            <div className="edu-card-top">
              <div className="edu-icon-wrap">
                <GraduationCap size={22} />
              </div>
              <div className="edu-date-badge">
                <Calendar size={13} />
                <span>{item.duration}</span>
              </div>
            </div>

            {/* Degree and Institution */}
            <div className="edu-body">
              <span className="edu-level-badge">{item.badge}</span>
              <h3 className="edu-institution">{item.institution}</h3>
              <h4 className="edu-degree">{item.degree}</h4>
            </div>

            {/* Score / Performance Callout */}
            <div className="edu-score-box">
              <div className="score-value-row">
                <Award size={18} className="score-icon" />
                <span className="edu-score-highlight">{item.score}</span>
              </div>
              <span className="edu-score-label">{item.scoreLabel}</span>
            </div>

            {/* Footer with location */}
            <div className="edu-card-footer">
              <div className="edu-location">
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

