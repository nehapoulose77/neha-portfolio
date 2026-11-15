import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Calendar,
  Building,
  Sparkles,
  FileCheck
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ACHIEVEMENTS } from "../data/portfolioData";

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = ACHIEVEMENTS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "honors") return item.type === "Award" || item.type === "Publication";
    if (activeFilter === "certifications") return item.type === "Certification" || item.type === "Workshop";
    return true;
  });

  return (
    <section className="section-container" id="achievements">
      <SectionHeading
        eyebrow="MILESTONES & CREDENTIALS"
        title="Achievements & Certifications"
        description="Formal industry certifications, research paper acceptance, academic fellowships, and technical workshops."
      />

      {/* Filter Tabs */}
      <div className="achievements-filter-row">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          <span>All Credentials</span>
          <span className="filter-count">8</span>
        </button>
        <button
          className={`filter-btn ${activeFilter === "honors" ? "active" : ""}`}
          onClick={() => setActiveFilter("honors")}
        >
          <Award size={15} />
          <span>Fellowship & Research</span>
          <span className="filter-count">2</span>
        </button>
        <button
          className={`filter-btn ${activeFilter === "certifications" ? "active" : ""}`}
          onClick={() => setActiveFilter("certifications")}
        >
          <FileCheck size={15} />
          <span>Certifications & Bootcamps</span>
          <span className="filter-count">6</span>
        </button>
      </div>

      {/* Achievements Cards Grid */}
      <motion.div className="achievements-grid" layout>
        <AnimatePresence>
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            const isHonor = item.type === "Award" || item.type === "Publication";

            return (
              <motion.div
                key={item.id}
                className={`achievement-card glass-panel ${isHonor ? "honor-highlight-card" : ""}`}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Top Row: Icon, Type Badge & Year */}
                <div className="achieve-top-row">
                  <div className={`achieve-icon-box ${isHonor ? "icon-gold" : "icon-purple"}`}>
                    <Icon size={20} />
                  </div>
                  <div className="achieve-badges">
                    <span className={`achieve-type-pill ${isHonor ? "pill-gold" : "pill-purple"}`}>
                      {item.type}
                    </span>
                    <span className="achieve-year-pill">
                      <Calendar size={12} />
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="achieve-content">
                  <h3 className="achieve-title">{item.title}</h3>
                  <div className="achieve-issuer">
                    <Building size={14} />
                    <span>{item.issuer}</span>
                  </div>
                  <p className="achieve-desc">{item.description}</p>
                </div>

                {/* Verified Footer */}
                <div className="achieve-footer">
                  <span className="verified-label">
                    <CheckCircle2 size={14} className="verified-icon" />
                    Verified Credential
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

