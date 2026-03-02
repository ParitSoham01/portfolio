import './Skills.css';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Full-Stack Development",
        skills: ["React.js", "Django", "JavaScript", "Node.js", "MongoDB", "HTML5", "CSS3", "Responsive Design"]
    },
    {
        category: "Core Technologies",
        skills: ["Core Java", "C++", "API Integration", "Data Structures"]
    },
    {
        category: "AI & Data",
        skills: ["Artificial Intelligence", "Machine Learning Fundamentals", "Data Analysis", "Insight Generation"]
    },
    {
        category: "DevOps & Cloud",
        skills: ["DevOps Practices", "Agile Management", "Cloud Operations", "Deployment Workflows"]
    }
];

const certifications = [
    "Programming in HTML5 with JavaScript and CSS3",
    "Oracle University Certified: AI Associate",
    "Scaling with Google Cloud Operations"
];

const Skills = () => {
    return (
        <section id="skills" className="section-container skills-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="highlight">02.</span> Skills & Certifications
            </motion.h2>

            <div className="skills-container">
                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <div className="skill-list">
                                {skillGroup.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="certifications-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3><span className="highlight">#</span> Professional Certifications</h3>
                    <ul className="cert-list">
                        {certifications.map((cert, index) => (
                            <li key={index} className="cert-item">
                                <div className="cert-bullet"></div>
                                <span>{cert}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
