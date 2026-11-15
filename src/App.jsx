import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Extracurricular from "./components/Extracurricular";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="main-content">
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Experience Section */}
        <Experience />

        {/* 4. Education Section */}
        <Education />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Technical Skills Section */}
        <Skills />

        {/* 7. Achievements and Certifications Section */}
        <Achievements />

        {/* 8. Extracurricular Activities Section */}
        <Extracurricular />

        {/* 9. Resume Section */}
        <ResumeSection />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer Section */}
      <Footer />

      {/* Floating Scroll To Top Action */}
      <ScrollToTop />
    </div>
  );
}
