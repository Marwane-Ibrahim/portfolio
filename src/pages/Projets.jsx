import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaUsers, FaBriefcase } from 'react-icons/fa';
import { projects } from '../data/projects';
import { getCompetenceById } from '../data/competences';

const Projets = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations en développement web, des projets académiques aux projets personnels.
            Chaque projet illustre des compétences techniques et une approche orientée solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(project)}
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

                {/* CTA */}
                <button
                  className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg font-semibold transition-colors"
                  onClick={() => openModal(project)}
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg z-10"
              aria-label="Fermer"
            >
              <FaTimes size={20} />
            </button>

            {/* Modal Content */}
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaBriefcase />
                    <span>{selectedProject.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers />
                    <span>Équipe de {selectedProject.teamSize}</span>
                  </div>
                  <div>
                    <span>{selectedProject.date}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                {/* Context */}
                <div className="mb-6 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contexte du projet</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Client</h4>
                      <p className="text-gray-700">{selectedProject.context.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Besoin</h4>
                      <p className="text-gray-700">{selectedProject.context.need}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-gray-700">{selectedProject.context.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Résultat</h4>
                      <p className="text-gray-700">{selectedProject.context.result}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compétences */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Compétences mobilisées</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.competences.map((compId) => {
                      const comp = getCompetenceById(compId);
                      return comp ? (
                        <Link
                          key={compId}
                          to={`/competences#${compId}`}
                          className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-all"
                          onClick={closeModal}
                        >
                          <span className="text-2xl">{comp.icon}</span>
                          <span className="font-medium text-gray-900">{comp.shortTitle}</span>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <FaGithub />
                      Code source
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Démo en ligne
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
