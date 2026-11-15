import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  FileCheck,
  ExternalLink,
  ShieldCheck,
  X
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROFILE } from "../data/portfolioData";

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(null);

  // Use configured GitHub URL if provided, otherwise local asset
  const targetResumeUrl = PROFILE.resumeGithubUrl || PROFILE.localResumeUrl;

  const handleDownload = (e) => {
    try {
      setDownloadStatus("downloading");

      // Create temporary anchor to enforce download
      const link = document.createElement("a");
      link.href = targetResumeUrl;
      link.setAttribute("download", PROFILE.resumeFileName);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloadStatus("success");
        setTimeout(() => setDownloadStatus(null), 3500);
      }, 600);
    } catch (err) {
      console.warn("Direct download failed, opening in new tab:", err);
      // Fallback: open PDF directly
      window.open(targetResumeUrl, "_blank", "noopener,noreferrer");
      setDownloadStatus(null);
    }
  };

  return (
    <section className="section-container" id="resume">
      <SectionHeading
        eyebrow="OFFICIAL DOCUMENTATION"
        title="My Resume"
        description="Want to know more about my education, technical skills, projects, and experience? Download my resume below."
        align="center"
      />

      <div className="resume-central-container">
        <motion.div
          className="resume-hero-card glass-panel"
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Top Gradient Orb */}
          <div className="resume-glow-orb"></div>

          {/* Document Header Icon */}
          <div className="resume-icon-badge">
            <FileText size={32} />
          </div>

          <div className="resume-meta-info">
            <span className="resume-doc-type">OFFICIAL CURRICULUM VITAE</span>
            <h3 className="resume-card-title">{PROFILE.name} – Resume</h3>
            <p className="resume-card-desc">
              Complete profile covering B.Tech Information Technology coursework, QA Testing internship at Testing Mavens, Data Science training, HIRE AI Capstone, certifications, and technical proficiencies.
            </p>
          </div>

          {/* Document Quick Metadata Box */}
          <div className="resume-file-meta-strip">
            <div className="meta-strip-item">
              <span className="strip-label">File Name</span>
              <span className="strip-value">{PROFILE.resumeFileName}</span>
            </div>
            <div className="meta-strip-divider"></div>
            <div className="meta-strip-item">
              <span className="strip-label">Format</span>
              <span className="strip-value">PDF Document</span>
            </div>
            <div className="meta-strip-divider"></div>
            <div className="meta-strip-item">
              <span className="strip-label">File Size</span>
              <span className="strip-value">{PROFILE.resumeSize}</span>
            </div>
            <div className="meta-strip-divider"></div>
            <div className="meta-strip-item">
              <span className="strip-label">Last Updated</span>
              <span className="strip-value">{PROFILE.resumeUpdated}</span>
            </div>
          </div>

          {/* ONE PROMINENT BUTTON as requested by prompt */}
          <div className="resume-primary-action-wrap">
            <button
              onClick={handleDownload}
              className="btn btn-primary resume-main-btn"
              aria-label="Download My Resume"
            >
              <Download size={20} className="download-btn-icon" />
              <span>Download My Resume</span>
            </button>

            {/* In-Browser Preview Toggle Option */}
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="resume-preview-link"
              aria-label="Preview resume in browser"
            >
              <Eye size={15} />
              <span>Preview document in browser</span>
            </button>

            {downloadStatus === "success" && (
              <motion.div
                className="download-success-toast"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <CheckCircle2 size={16} />
                <span>Resume downloaded successfully!</span>
              </motion.div>
            )}
          </div>

          {/* Configurable Note */}
          <div className="resume-security-note">
            <ShieldCheck size={14} />
            <span>
              Verified PDF sourced directly from portfolio repository.
              {PROFILE.resumeGithubUrl
                ? " (Synchronized with GitHub Raw source)"
                : " (Local bundle asset verified)"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Modal Preview for Recruiters */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="resume-modal-overlay" onClick={() => setIsPreviewOpen(false)}>
            <motion.div
              className="resume-modal-content glass-panel"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-modal-header">
                <div className="modal-title-wrap">
                  <FileText size={20} />
                  <h3>{PROFILE.name} – Resume Preview</h3>
                </div>
                <div className="modal-header-actions">
                  <a
                    href={targetResumeUrl}
                    download={PROFILE.resumeFileName}
                    className="modal-download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={15} />
                    <span>Download</span>
                  </a>
                  <button
                    className="modal-close-btn"
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="resume-modal-body">
                <iframe
                  src={`${targetResumeUrl}#toolbar=1`}
                  title="Neha Poulose K Resume"
                  className="resume-iframe"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

