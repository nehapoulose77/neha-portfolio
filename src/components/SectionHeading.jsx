import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCentered = align === "center";

  return (
    <motion.div
      className={`section-header ${isCentered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow && (
        <div className="section-eyebrow-wrap">
          <span className="section-eyebrow-dot"></span>
          <span className="section-eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="section-title">
        {title}
        <span className="accent-dot">.</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  );
}

