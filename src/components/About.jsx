import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Code2,
  Languages,
  Palette,
  Heart,
  CheckCircle,
  Briefcase,
  Award,
  Layers,
  FileCheck
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ABOUT_DETAILS, PROFILE } from "../data/portfolioData";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <section className="section-container" id="about">
      <SectionHeading
        eyebrow="GET TO KNOW ME"
        title="About Me"
        description="Driven Information Technology graduate with an analytical mindset, passion for software quality assurance, and hands-on engineering experience."
      />

      <div className="about-layout-grid">
        {/* Main Narrative Card */}
        <motion.div
          className="about-main-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="quote-badge">
            <span className="quote-mark">“</span>
            <p className="about-exact-statement">
              {PROFILE.aboutParagraph}
            </p>
          </div>

          <div className="about-pillars-grid">
            {/* Education Overview */}
            <div className="pillar-item">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <GraduationCap size={18} />
                </div>
                <h4>Education Overview</h4>
              </div>
              <p>{ABOUT_DETAILS.educationOverview}</p>
            </div>

            {/* Professional Interests */}
            <div className="pillar-item">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Sparkles size={18} />
                </div>
                <h4>Professional Interests</h4>
              </div>
              <p>{ABOUT_DETAILS.professionalInterests}</p>
            </div>

            {/* Technical Background */}
            <div className="pillar-item full-width">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Code2 size={18} />
                </div>
                <h4>Technical Background</h4>
              </div>
              <p>{ABOUT_DETAILS.technicalBackground}</p>
            </div>
          </div>
        </motion.div>

        {/* Side Details Column */}
        <div className="about-side-column">
          {/* Languages Card */}
          <motion.div
            className="about-detail-card glass-panel"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="detail-card-header">
              <div className="detail-icon languages-icon">
                <Languages size={18} />
              </div>
              <div>
                <h4 className="detail-title">Languages</h4>
                <span className="detail-subtitle">Multilingual communication</span>
              </div>
            </div>

            <div className="languages-pills">
              {ABOUT_DETAILS.languages.map((lang) => (
                <div key={lang.name} className="language-badge">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            className="about-detail-card glass-panel"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="detail-card-header">
              <div className="detail-icon interests-icon">
                <Heart size={18} />
              </div>
              <div>
                <h4 className="detail-title">Interests & Hobbies</h4>
                <span className="detail-subtitle">Creativity & mindfulness</span>
              </div>
            </div>

            <div className="interests-grid">
              {ABOUT_DETAILS.interests.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="interest-item">
                    <div className="interest-icon-circle">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="interest-title">{item.name}</span>
                      <p className="interest-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Key Metric Highlights Card */}
          <motion.div
            className="about-detail-card glass-panel metrics-panel"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="metrics-grid">
              {ABOUT_DETAILS.highlights.map((h, i) => (
                <div key={i} className="metric-box">
                  <span className="metric-val">{h.value}</span>
                  <span className="metric-lbl">{h.label}</span>
                  <span className="metric-sub">{h.subtitle}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

