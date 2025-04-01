import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFilePdf, FaGlobe } from "react-icons/fa";
import "./Portfolio.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const categorizedSkills = {
    Technical: [
      { name: "Data Analysis", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Python", level: 80 },
      { name: "Javascript", level: 75 },
      { name: "React", level: 75 },
      { name: "Excel", level: 90 },
      { name: "Data Visualization", level: 85 },
    ],
    Soft: [
      { name: "Public Speaking", level: 80 },
      { name: "Team Collaboration", level: 85 },
      { name: "Critical Thinking", level: 88 },
      { name: "Problem Solving", level: 87 },
    ],
  };

  useEffect(() => {
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }
      }
    };

    const links = document.querySelectorAll(".navbar-links a");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, []);

  return (
    <div className={`portfolio-wrapper ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">Carl Gabriel Yap</h1>
          <ul className="navbar-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="navbar-icons">
            <a
              href="/downloads/Carl Gabriel-Yap-Resume.pdf"
              download
              title="Download Resume"
            >
              <FaFilePdf size={20} />
            </a>
            <a
              href="https://carlgabrielyap.jobs180.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Jobs180 Profile"
            >
              <FaGlobe size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/carl-gabriel-yap/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle Theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <div className="content-container">
        {/* Header */}
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="header-title">Carl Gabriel Yap</h1>
          <p className="header-subtitle">
            Aspiring Data Analyst | Power BI & Python Enthusiast
          </p>
        </motion.header>

        {/* About Section */}
        <motion.section
          id="about"
          className="section shadow-lg section-outline card-style"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <h2 className="section-title">About Me</h2>
          <p>
            I am an aspiring data analyst with a strong foundation in computer
            science, currently completing my Bachelor's Degree at Holy Angel
            University. My passion lies in uncovering insights from complex data
            and transforming them into actionable strategies. I thrive on
            challenges and am driven to help organizations succeed in their
            goals through data-driven decisions. I am proficient in Power BI,
            Excel, Python, and Javascript, and continually seek opportunities to
            expand my knowledge and contribute meaningfully.
          </p>
        </motion.section>

        {/* Resume Highlights */}
        <motion.section
          id="resume"
          className="section shadow-lg section-outline card-style"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <h2 className="section-title">Education & Experience</h2>
          <ul className="resume-list">
            <li>
              <strong>Education:</strong>
            </li>
            <li>
              Bachelor of Science in Computer Science — Holy Angel University
              (Expected Apr 2025)
            </li>
            <li>
              Senior High School — Holy Angel University, STEM Track (Apr 2021)
            </li>
            <li>
              <strong>Internship:</strong>
            </li>
            <li>
              IT Intern — Clark International Airport Corporation (CIAC)
              (December 2024 – April 2024)
            </li>
            <li>
              Assisted with IT support, helped generate and automate reports,
              and collaborated with the data team for analysis-related tasks.
            </li>
            <li>
              <strong>Certifications & Seminars:</strong>
            </li>
            <li>Leadership Training Certificate (2021)</li>
            <li>3rd Regional Cybersecurity Conference (2025)</li>
            <li>Professional Development Workshop (2025)</li>
            <li>SSS, Pag-IBIG, and PhilHealth Orientation (2025)</li>
            <li>
              DOLE Labor and Employment Guidance for Students (LEGS) (2025)
            </li>
            <li>AI and Cybersecurity Seminar (2025)</li>
            <li>
              Professional Development Workshop by Career and Placement Office
              (2020)
            </li>
            <li>Excel Macros & VBA for Beginners</li>
            <li>Data Analytics for Business</li>
            <li>Excel Automation with ChatGPT</li>
            <li>
              <strong>Achievements:</strong>
            </li>
            <li>Dean’s Lister</li>
            <li>
              <strong>Languages:</strong> English, Filipino, Kapampangan
            </li>
          </ul>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="section shadow-lg section-outline card-style"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <h2 className="section-title">Skills</h2>
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category} Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-meter">
                      <div
                        className="skill-meter-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section
          id="projects"
          className="section shadow-lg section-outline card-style"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <h2 className="section-title">Projects</h2>

          <div className="project-card">
            <h3 className="project-title">CRK Airport Traffic Dashboard</h3>
            <p className="project-description">
              A Power BI dashboard project analyzing the CRK Airport passengers.
              Includes filters, KPIs, and interactive visuals to help
              stakeholders make data-driven decisions.
            </p>
            <div className="abstract-box">
              <iframe
                src="images/Flow Map.png"
                title="Flow Map Preview"
                className="project-image"
                style={{ width: "100%", height: "500px", border: "none" }}
              ></iframe>
            </div>
          
          </div>

          <div className="project-card">
            <h3 className="project-title">
              Thesis Project: Grade Predictor App
            </h3>
            <p className="project-description">
              Our Thesis project utilized Random Forest algorithm that was able
              to use historical data of students from their previous grade along
              with other factors that we used for prediction.
            </p>
            <div className="abstract-box">
              <motion.div
                className="abstract-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="images/HAU.png"
                  alt="HAU Logo"
                  className="abstract-icon"
                />
                <h4 className="abstract-heading">Abstract</h4>
                <p className="abstract-text">
                  As students progress through elementary school, a positive
                  learning environment becomes increasingly important. Many
                  students, however, face challenges that may impede their
                  ability to graduate. Some graduating elementary students
                  experience inconsistent academic performance due to a variety
                  of factors, including family financial situation, learning
                  environment, class attendance, and historical grades.
                </p>
                <p className="abstract-text">
                  This research aims to: (1) collect students' GPA records, (2)
                  develop a predictive model using the Random Forest algorithm,
                  (3) evaluate the model's accuracy and efficiency, (4) create a
                  website incorporating the predictive model, and (5) assess the
                  website's applicability. This tool serves as a GPA predictor
                  and can identify various levels of student GPA.
                </p>
                <p className="abstract-text">
                  This study employed a quantitative approach, utilizing survey
                  interviews and questionnaires administered to selected
                  individuals. A dataset of 76 sixth-grade students from San
                  Pedro Elementary School (SPES) was used to train a predictive
                  model. This model, which included factors such as financial
                  situation, learning environment, class attendance, and
                  historical grades, achieved an R2 score of 0.743 in predicting
                  student GPA. Notably, attendance records were a significant
                  predictor, contributing 0.488 to the model's overall accuracy.
                </p>
                <p className="abstract-keywords">
                  <strong>Keywords:</strong> Random Forest Algorithm, Machine
                  Learning, Academic Performance, Prediction, GPA, Data
                  Analytics
                </p>
              </motion.div>
              <a
                href="/downloads/Thesis.docx"
                download
                className="button-link"
                style={{ marginTop: "0.5rem", display: "inline-block" }}
              >
                Download Full Thesis (Docx)
              </a>
            </div>
            <div className="project-card">
              <h3 className="project-title">
                Lease Calculator for Clark International Airport Corporation
              </h3>
              <p className="project-description">
                A React project made for the Strategical Corporation and
                Management Department used to calculate the lease rates to be
                given{" "}
              </p>
              <div className="abstract-box">
                <iframe
                  src="images/LeaseRate.png"
                  title="Lease Rate Calculator Preview"
                  className="project-image"
                  style={{ width: "100%", height: "500px", border: "none" }}
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="section text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <div className="contact-card">
            <div className="contact-content">
              <h3 className="contact-title">Let's Connect</h3>
              <p className="contact-info">
                Email me at{" "}
                <a href="mailto:cgabrielyap@gmail.com">cgabrielyap@gmail.com</a>
              </p>
              <a href="mailto:cgabrielyap@gmail.com" className="button-link">
                Send Email
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
