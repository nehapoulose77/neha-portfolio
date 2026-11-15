import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send
} from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Ambient Glows */}
      <div className="hero-ambient-glow glow-purple"></div>
      <div className="hero-ambient-glow glow-yellow"></div>
      <div className="hero-grid-pattern"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div className="hero-status-pill" variants={itemVariants}>
            <span className="status-ping">
              <span className="ping-effect"></span>
              <span className="ping-dot"></span>
            </span>
            <span className="status-text">{PROFILE.availabilityStatus}</span>
          </motion.div>

          {/* Greeting */}
          <motion.div className="hero-greeting-wrap" variants={itemVariants}>
            <span className="hero-greeting">{PROFILE.greeting}</span>
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero-name" variants={itemVariants}>
            {PROFILE.name}
            <span className="hero-accent-dot">.</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 className="hero-title" variants={itemVariants}>
            {PROFILE.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p className="hero-tagline" variants={itemVariants}>
            {PROFILE.tagline}
          </motion.p>

          {/* Short Professional Intro */}
          <motion.p className="hero-description" variants={itemVariants}>
            {PROFILE.shortIntro}
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="hero-cta-group" variants={itemVariants}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, "#projects")}
            >
              <span>View Projects</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              <span>Contact Me</span>
              <Send size={16} />
            </a>
          </motion.div>

          {/* Social Links & Meta */}
          <motion.div className="hero-meta-row" variants={itemVariants}>
            <div className="hero-social-links">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="GitHub Profile"
                title="GitHub - nehapoulose77"
              >
                <Github size={20} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn - Neha Poulose K"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="hero-social-btn"
                aria-label="Email Neha"
                title={`Email: ${PROFILE.email}`}
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="hero-divider"></div>

            <div className="hero-location-badge">
              <MapPin size={16} className="location-icon" />
              <span>{PROFILE.location}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual / Uploaded Photograph */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-wrapper">
            {/* Multi-layered Purple & Violet Glow */}
            <div className="photo-outer-glow"></div>
            <div className="photo-inner-glow"></div>

            {/* Photo Frame */}
            <div className="photo-frame">
              {!imgError ? (
                <img
                  src={PROFILE.photo}
                  alt={`Professional photograph of ${PROFILE.name}`}
                  className={`hero-photo ${imgLoaded ? "photo-loaded" : "photo-loading"}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="photo-fallback">
                  <span className="photo-initials">NP</span>
                  <p>{PROFILE.name}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <motion.a
        href="#about"
        className="hero-scroll-cue"
        onClick={(e) => scrollToSection(e, "#about")}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Scroll down to About section"
      >
        <span className="scroll-cue-text">Scroll to explore</span>
        <div className="scroll-cue-icon">
          <ArrowDown size={14} />
        </div>
      </motion.a>
    </section>
  );
}

