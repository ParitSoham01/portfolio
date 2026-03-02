import './Contact.css';
import { motion } from 'framer-motion';
import { BiEnvelope, BiLogoLinkedin } from 'react-icons/bi';

const Contact = () => {
    return (
        <section id="contact" className="section-container contact-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="highlight">04.</span> Get In Touch
            </motion.h2>

            <div className="contact-wrapper">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="contact-desc">
                        Let's connect if you're building something remarkable, seeking a motivated collaborator, or interested in discussing where technology is heading.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:sohamparit122@gmail.com" className="contact-card">
                            <BiEnvelope className="contact-icon" />
                            <div>
                                <h4>Email</h4>
                                <span>sohamparit122@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/sohamparit-05015035b" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <BiLogoLinkedin className="contact-icon" />
                            <div>
                                <h4>LinkedIn</h4>
                                <span>Soham Parit</span>
                            </div>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-container"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows={5} placeholder="Hello Soham, I'd like to talk about..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </motion.div>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Soham Parit. All rights reserved.</p>
                <p className="footer-subtext">Built with React & Vite. Inspired by futuristic aesthetics.</p>
            </footer>
        </section>
    );
};

export default Contact;
