import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText, Send } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          aria-label="Neha Poulose K Portfolio Home"
        >
          <span className="brand-text">Neha</span>
          <span className="brand-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="nav-active-pill"
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="navbar-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mobile-drawer-header">
                <span className="brand-logo">
                  Neha<span className="brand-accent">.</span>
                </span>
                <button
                  className="mobile-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-drawer-body">
                <nav className="mobile-nav-links">
                  {NAV_LINKS.map((link, idx) => {
                    const id = link.href.substring(1);
                    const isActive = activeSection === id;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className={`mobile-nav-item ${isActive ? "active" : ""}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                      >
                        <span className="mobile-link-num">0{idx + 1}</span>
                        <span className="mobile-link-text">{link.name}</span>
                        {isActive && <span className="mobile-active-dot"></span>}
                      </motion.a>
                    );
                  })}
                </nav>

                <div className="mobile-drawer-footer">
                  <a
                    href="#resume"
                    className="mobile-action-btn mobile-resume-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("#resume");
                    }}
                  >
                    <FileText size={16} />
                    <span>Download Resume</span>
                  </a>
                  <a
                    href="#contact"
                    className="mobile-action-btn mobile-contact-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("#contact");
                    }}
                  >
                    <Send size={16} />
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

