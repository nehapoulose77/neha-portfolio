import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROFILE } from "../data/portfolioData";

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSent, setFormSent] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto query so message opens in default email client with exact details
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Recruiter"}`
    );
    const body = encodeURIComponent(
      `Hi Neha,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section className="section-container" id="contact">
      <SectionHeading
        eyebrow="GET IN TOUCH"
        title="Contact Me"
        description="Whether you have an open QA or Software Engineering role, a project inquiry, or just want to connect, my inbox is always open."
      />

      <div className="contact-grid">
        {/* Contact Info Cards */}
        <motion.div
          className="contact-info-col"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="contact-cards-container">
            {/* Email Card */}
            <div className="contact-channel-card glass-panel">
              <div className="channel-icon-wrap email-icon">
                <Mail size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email Address</span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="channel-value email-link"
                  title="Send Email"
                >
                  {PROFILE.email}
                </a>
              </div>
              <div className="channel-actions">
                <button
                  className="channel-action-btn"
                  onClick={() => copyToClipboard(PROFILE.email, "email")}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedType === "email" ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="channel-action-btn"
                  aria-label="Open email client"
                  title="Send email"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-channel-card glass-panel">
              <div className="channel-icon-wrap phone-icon">
                <Phone size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Phone & WhatsApp</span>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  className="channel-value"
                  title="Call Phone Number"
                >
                  {PROFILE.phone}
                </a>
              </div>
              <div className="channel-actions">
                <button
                  className="channel-action-btn"
                  onClick={() => copyToClipboard(PROFILE.phone, "phone")}
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedType === "phone" ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
                <a
                  href={`tel:${PROFILE.phoneRaw}`}
                  className="channel-action-btn"
                  aria-label="Call phone"
                  title="Direct call"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-channel-card glass-panel">
              <div className="channel-icon-wrap linkedin-icon">
                <Linkedin size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">LinkedIn Profile</span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                  title="Open LinkedIn"
                >
                  linkedin.com/in/neha-poulose-k
                </a>
              </div>
              <div className="channel-actions">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  aria-label="Visit LinkedIn"
                  title="Visit LinkedIn"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-channel-card glass-panel">
              <div className="channel-icon-wrap github-icon">
                <Github size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">GitHub Profile</span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                  title="Open GitHub"
                >
                  github.com/nehapoulose77
                </a>
              </div>
              <div className="channel-actions">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  aria-label="Visit GitHub"
                  title="Visit GitHub"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Location Pill */}
            <div className="location-info-bar glass-panel">
              <MapPin size={18} className="location-pin-icon" />
              <span>Based in {PROFILE.location} · Open to On-site, Hybrid & Remote Roles</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Message Form */}
        <motion.div
          className="contact-form-col"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="form-header-icon">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-subtitle">I typically respond within 24 hours.</p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name" className="field-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe / HR Team"
                  className="field-input"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="field-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  className="field-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject" className="field-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Job Opportunity / QA Engineer Role"
                className="field-input"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message or inquiry here..."
                className="field-input field-textarea"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {/* Prominent Contact Me Button */}
            <button type="submit" className="btn btn-primary form-submit-btn">
              <span>Contact Me</span>
              <Send size={18} />
            </button>

            {formSent && (
              <div className="form-success-banner">
                <Check size={16} />
                <span>Your email draft is ready. Opening your email app...</span>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

