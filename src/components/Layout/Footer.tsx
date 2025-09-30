import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer w-full mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Logo + Text */}
        <div className="flex items-center gap-2 text-center md:text-left footer-text">
          <img
            src="/to-do-list.png"
            alt="App Logo"
            className="w-7 h-6 object-contain"
          />
          <p>New features are on the way — stay tuned!</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 footer-icons">
          <a
            href="https://github.com/NaghamElGreeny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/naghamelgreeny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-copy">© 2025 Nagham Elgreeny</p>
    </footer>
  );
}

export default Footer;
