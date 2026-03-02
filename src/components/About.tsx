import './About.css';
import { motion } from 'framer-motion';
import { BiCodeAlt, BiBrain, BiServer, BiTrophy } from 'react-icons/bi';

const About = () => {
    return (
        <section id="about" className="section-container about-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="highlight">01.</span> About Me
            </motion.h2>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>
                        Currently pursuing my diploma at <strong>SVERI College of Engineering Polytechnic</strong>, I've embraced a philosophy beyond traditional learning. I collaborate with professors on curriculum development, orchestrate study groups, and champion campus initiatives that foster community engagement.
                    </p>
                    <p>
                        What captivates me? The intersection of <strong>elegant code, artificial intelligence, and purposeful design</strong>. Whether architecting React components that feel intuitive, engineering DevOps workflows, or experimenting with AI systems—I'm fascinated by technology's capacity to solve meaningful problems.
                    </p>
                    <p>
                        <strong>The AI perspective:</strong> I believe tomorrow's developers will create alongside intelligent systems. I'm positioning myself at this frontier—building applications that learn, adapt, and deliver personalized experiences.
                    </p>
                    <p>
                        Beyond coding, I compete in national hackathons, explore ethical hacking, and study influencer marketing to grasp how technology intersects with human behavior.
                    </p>
                </motion.div>

                <motion.div
                    className="about-cards"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="info-card">
                        <BiCodeAlt className="info-icon" />
                        <h3>Frontend Dev</h3>
                        <span>React.js, Responsive UI</span>
                    </div>
                    <div className="info-card">
                        <BiServer className="info-icon" />
                        <h3>Backend Dev</h3>
                        <span>Node.js, Django, MongoDB</span>
                    </div>
                    <div className="info-card">
                        <BiBrain className="info-icon" />
                        <h3>AI Explorer</h3>
                        <span>Machine Learning basics</span>
                    </div>
                    <div className="info-card">
                        <BiTrophy className="info-icon" />
                        <h3>Problem Solver</h3>
                        <span>Systematic debugging</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
