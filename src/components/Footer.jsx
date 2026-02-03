import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/marwane-ibrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/marwane-ibrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:marwane.ibrahim@example.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {currentYear} Marwane Ibrahim. Tous droits réservés.</p>
            <p className="mt-1">Développeur Web Full-Stack</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
