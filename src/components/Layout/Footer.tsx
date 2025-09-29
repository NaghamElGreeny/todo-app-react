import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white w-full py-4 lg:py-2 border-t mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Logo + Text */}
        <div className="flex items-center gap-2 text-gray-600 text-sm text-center md:text-left">
          <img
            src="/to-do-list.png"
            alt="App Logo"
            className="w-7 h-6 object-contain"
          />
          <p>New features are on the way — stay tuned!</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-500 text-lg">
          <a
            href="https://github.com/NaghamElGreeny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-black transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/naghamelgreeny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-xs mt-4">
        © 2025 Nagham Elgreeny
      </p>
    </footer>
  );
}

export default Footer;
