import { motion } from "framer-motion";
import {
  Terminal,
  Globe,
  MonitorCheck,
  Code2,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section-container" id="skills">
      <SectionHeading
        eyebrow="CORE COMPETENCIES"
        title="Technical Skills"
        description="Categorized technical capabilities spanning programming languages, web engineering, software testing, and modern developer tooling."
      />

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.id}
              className="skill-category-card glass-panel"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Category Header */}
              <div className="skill-cat-header">
                <div className="skill-cat-icon-box">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                  <p className="skill-cat-desc">{cat.description}</p>
                </div>
              </div>

              {/* Skills Badge Container (Purple and Yellow badges, NO percentage ratings) */}
              <div className="skills-badge-list">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-badge-item">
                    <span className="skill-badge-dot"></span>
                    <span className="skill-badge-text">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

