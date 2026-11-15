import { motion } from "framer-motion";
import { UserCheck, Lightbulb, Calendar, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXTRACURRICULAR } from "../data/portfolioData";

export default function Extracurricular() {
  return (
    <section className="section-container" id="extracurricular">
      <SectionHeading
        eyebrow="LEADERSHIP & ENGAGEMENT"
        title="Extracurricular Activities"
        description="Active campus involvement through technical symposium management and competitive hackathon participation."
      />

      <div className="extracurricular-grid">
        {EXTRACURRICULAR.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className="extra-card glass-panel"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="extra-card-header">
                <div className="extra-icon-box">
                  <Icon size={22} />
                </div>
                <div className="extra-badge-group">
                  <span className="extra-role-badge">{item.role}</span>
                  {item.duration && (
                    <span className="extra-date-badge">
                      <Calendar size={12} />
                      {item.duration}
                    </span>
                  )}
                </div>
              </div>

              <div className="extra-card-body">
                <h3 className="extra-title">{item.title}</h3>
                <h4 className="extra-event-name">{item.event}</h4>
                <p className="extra-description">{item.description}</p>
              </div>

              <div className="extra-card-footer">
                <div className="extra-tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag} className="extra-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

