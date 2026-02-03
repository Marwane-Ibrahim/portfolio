import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileDownload, FaCode, FaLightbulb, FaRocket, FaUsers, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import photoPort from '../assets/photoPort.jpg';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[90%] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
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

      {/* Parcours Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-[90%] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mon Parcours
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Ligne centrale - visible sur desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            
            {/* Ligne gauche - visible sur mobile */}
            <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>

            <div className="space-y-12">
              {/* Bac */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  {/* Contenu gauche (desktop) */}
                  <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl max-w-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary text-white p-2 rounded-lg">
                          <FaGraduationCap size={20} />
                        </div>
                        <span className="text-sm font-semibold text-primary">2020 - 2021</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Baccalauréat</h3>
                      <p className="text-gray-600 font-medium mb-1">Lycée Pierre Marie Théas</p>
                      <p className="text-gray-500 text-sm">Obtention du baccalauréat, première étape vers le développement web</p>
                    </div>
                  </div>
                  
                  {/* Point central */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Contenu mobile */}
                  <div className="md:hidden ml-12 bg-white p-6 rounded-lg shadow-lg border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary text-white p-2 rounded-lg">
                        <FaGraduationCap size={20} />
                      </div>
                      <span className="text-sm font-semibold text-primary">2020 - 2021</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Baccalauréat</h3>
                    <p className="text-gray-600 font-medium mb-1">Lycée Pierre Marie Théas</p>
                    <p className="text-gray-500 text-sm">Obtention du baccalauréat, première étape vers le développement web</p>
                  </div>
                  
                  {/* Espace droit (desktop) */}
                  <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                </div>
              </div>

              {/* BUT 1ère & 2ème année */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  {/* Espace gauche (desktop) */}
                  <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                  
                  {/* Point central */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Contenu droit (desktop) */}
                  <div className="hidden md:flex md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl max-w-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-secondary text-white p-2 rounded-lg">
                          <FaGraduationCap size={20} />
                        </div>
                        <span className="text-sm font-semibold text-secondary">2021 - 2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">BUT Informatique - 1ère & 2ème année</h3>
                      <p className="text-gray-600 font-medium mb-1">Formation initiale</p>
                      <p className="text-gray-500 text-sm">Apprentissage des fondamentaux du développement, programmation, bases de données et conception d'applications</p>
                    </div>
                  </div>
                  
                  {/* Contenu mobile */}
                  <div className="md:hidden ml-12 bg-white p-6 rounded-lg shadow-lg border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-secondary text-white p-2 rounded-lg">
                        <FaGraduationCap size={20} />
                      </div>
                      <span className="text-sm font-semibold text-secondary">2021 - 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">BUT Informatique - 1ère & 2ème année</h3>
                    <p className="text-gray-600 font-medium mb-1">Formation initiale</p>
                    <p className="text-gray-500 text-sm">Apprentissage des fondamentaux du développement, programmation, bases de données et conception d'applications</p>
                  </div>
                </div>
              </div>

              {/* BUT 3ème année - Alternance */}
              <div className="relative flex items-center md:justify-center">
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                  {/* Contenu gauche (desktop) */}
                  <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
                    <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-lg text-white max-w-md relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-white text-primary text-xs font-bold px-2 py-1 rounded-full">
                        En cours
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-white text-primary p-2 rounded-lg">
                          <FaBriefcase size={20} />
                        </div>
                        <span className="text-sm font-semibold text-blue-100">2024 - 2025</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">BUT Informatique - 3ème année</h3>
                      <p className="text-blue-100 font-medium mb-1">Alternance</p>
                      <p className="text-blue-100 text-sm">Mise en pratique professionnelle des compétences acquises, développement d'applications en entreprise</p>
                    </div>
                  </div>
                  
                  {/* Point central */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-primary shadow-lg z-10 animate-pulse"></div>
                  
                  {/* Contenu mobile */}
                  <div className="md:hidden ml-12 bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-lg text-white relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-white text-primary text-xs font-bold px-2 py-1 rounded-full">
                      En cours
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white text-primary p-2 rounded-lg">
                        <FaBriefcase size={20} />
                      </div>
                      <span className="text-sm font-semibold text-blue-100">2024 - 2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">BUT Informatique - 3ème année</h3>
                    <p className="text-blue-100 font-medium mb-1">Alternance</p>
                    <p className="text-blue-100 text-sm">Mise en pratique professionnelle des compétences acquises, développement d'applications en entreprise</p>
                  </div>
                  
                  {/* Espace droit (desktop) */}
                  <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences rapides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-[90%] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-[90%] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Projets récents
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                to={`/projets?id=${project.id}`}
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
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
              </Link>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="w-full max-w-[90%] xl:max-w-5xl mx-auto text-center">
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
