import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-greeting">Hi, I am</h1>
                    <h2 className="hero-name">Soham Parit</h2>
                    <div className="hero-roles">
                        I am a <span className="highlight">
                            <Typewriter
                                words={['Full Stack Developer', 'AI Explorer', 'Data Analyst', 'Project Manager']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <p className="hero-bio">
                        I build digital solutions and explore artificial intelligence—crafting experiences where technology amplifies human potential.
                    </p>
                    <div className="hero-cta">
                        <a href="#about" className="resume-btn">Check Resume</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-image-wrapper">
                        {/* Placeholder for actual image: Using a sleek animated gradient circle */}
                        <div className="profile-image-container">
                            <img src="/profile.jpg" alt="Soham Parit" className="profile-image" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
