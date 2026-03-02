import './Experience.css';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: "Agency Development Manager",
        company: "Hire Tech Squad",
        duration: "July 2025 - Present",
        location: "Mumbai, Maharashtra, India",
        type: "work"
    },
    {
        role: "Cloud Intern",
        company: "Uptricks Services Pvt. Ltd.",
        duration: "November 2025 - January 2026",
        location: "Remote/India",
        type: "work"
    },
    {
        role: "Social Media Management Intern",
        company: "Marpu Foundation | India's Top NGO",
        duration: "August 2025 - September 2025",
        location: "India",
        type: "work"
    },
    {
        role: "Diploma, Information Technology",
        company: "Sveri College of Engineering Polytechnic",
        duration: "July 2024 - May 2027",
        location: "Pandharpur, Solapur, India",
        type: "education"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-container experience-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="highlight">03.</span> Experience & Education
            </motion.h2>

            <div className="timeline-container">
                {experienceData.map((exp, index) => (
                    <motion.div
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="timeline-dot"></div>
                        <div className={`timeline-content ${exp.type}`}>
                            <span className="timeline-duration">{exp.duration}</span>
                            <h3 className="timeline-role">{exp.role}</h3>
                            <h4 className="timeline-company">
                                {exp.company}
                            </h4>
                            <p className="timeline-location">{exp.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
