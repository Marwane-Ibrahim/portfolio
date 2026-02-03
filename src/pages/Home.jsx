import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileDownload, FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import photoPort from '../assets/photoPort.jpg';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
              <img
                src={photoPort}
                alt="Marwane Ibrahim"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Présentation */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Marwane Ibrahim
              </h1>
              <h2 className="text-2xl text-primary font-semibold mb-6">
                Développeur Web Full-Stack
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Développeur web en fin de formation (Bac+3), passionné par le développement web moderne
                et les technologies innovantes. Je crée des applications performantes et intuitives
                en combinant expertise technique et sens du design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  to="/projets"
                  className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  Voir mes projets
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary transition-colors"
                >
                  Me contacter
                </Link>
                <a
                  href="/cv-marwane-ibrahim.pdf"
                  download
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <FaFileDownload />
                  Télécharger CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a
                  href="https://github.com/marwane-ibrahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/marwane-ibrahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences rapides */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mes domaines d'expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-primary transition-colors hover:shadow-lg">
              <div className="text-primary text-5xl mb-4 flex justify-center">
                <FaCode />
              </div>
              <h3 className="text-xl font-bold mb-3">Développement Full-Stack</h3>
              <p className="text-gray-600">
                React, Vue.js, Node.js, Spring Boot, bases de données SQL et NoSQL
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-primary transition-colors hover:shadow-lg">
              <div className="text-primary text-5xl mb-4 flex justify-center">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold mb-3">Conception & UX</h3>
              <p className="text-gray-600">
                Design responsive, interfaces intuitives, optimisation de l'expérience utilisateur
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-primary transition-colors hover:shadow-lg">
              <div className="text-primary text-5xl mb-4 flex justify-center">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance & Optimisation</h3>
              <p className="text-gray-600">
                Code optimisé, bonnes pratiques, CI/CD, déploiement et monitoring
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/competences"
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Découvrir toutes mes compétences
            </Link>
          </div>
        </div>
      </section>

      {/* Projets en vedette */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Projets récents
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} autres
                      </span>
                    )}
                  </div>

                  {/* Date & Team */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaUsers />
                      <span>{project.teamSize} {project.teamSize > 1 ? 'personnes' : 'personne'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projets"
              className="inline-block bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary transition-colors"
            >
              Voir tous mes projets
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à collaborer sur votre prochain projet ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Je suis actuellement à la recherche d'opportunités professionnelles en développement web.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Discutons-en !
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
