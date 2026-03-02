import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home">Soham Parit</a>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#education" className="nav-link">Education</a></li>
                </ul>
                <div className="navbar-button">
                    <a href="https://www.linkedin.com/in/sohamparit-05015035b" target="_blank" rel="noopener noreferrer" className="github-btn">
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
