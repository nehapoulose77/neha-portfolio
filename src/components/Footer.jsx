import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { PROFILE, NAV_LINKS } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-top-border"></div>

      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand" onClick={scrollToTop}>
              Neha<span className="accent-dot">.</span>
            </a>
            <p className="footer-designer-text">
              Designed & Developed by <strong>{PROFILE.name}</strong>
            </p>
            <p className="footer-tagline-text">{PROFILE.title} · Rajagiri Class of 2026</p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <span className="footer-heading">Navigation</span>
            <div className="footer-links-grid">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social and Back to Top */}
          <div className="footer-social-col">
            <span className="footer-heading">Connect</span>
            <div className="footer-social-icons">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="footer-social-btn"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Smooth Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} {PROFILE.name}. All rights reserved.
          </p>
          <p className="footer-subtext">
            Built with React.js, Vite & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

