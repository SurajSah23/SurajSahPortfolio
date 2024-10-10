import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h2>Contact Me</h2>

            <div className="contact-info">
                <a href="https://github.com/SurajSah23" target="_blank" rel="noopener noreferrer" className="contact-item github">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" />
                    <span>GitHub</span>
                </a>
                <a href="mailto:suraj23@navgurukul.org" className="contact-item email">
                    <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="Email Icon" />
                    <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/suraj-sah-b350a42b9/" target="_blank" rel="noopener noreferrer" className="contact-item linkedin">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn Logo" />
                    <span>LinkedIn</span>
                </a>
                <div className="contact-item phone">
                    <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="Phone Icon" />
                    <span>+91 8178158016</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
