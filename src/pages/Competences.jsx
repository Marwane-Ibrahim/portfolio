import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { competences } from '../data/competences';
import { projects } from '../data/projects';

const Competences = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to competence if hash is present in URL
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mes Compétences</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Au cours de ma formation et de mes projets, j'ai développé un ensemble de compétences
            techniques et méthodologiques essentielles pour le développement d'applications modernes.
          </p>
        </div>

        {/* Introduction personnelle */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de mon parcours</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Passionné par le développement web depuis le lycée, j'ai choisi le BUT Informatique pour
            approfondir mes connaissances et acquérir une expertise technique solide. Durant ces trois
            années, j'ai évolué d'un débutant curieux à un développeur capable de concevoir et déployer
            des applications complètes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mon approche du développement se base sur trois piliers : la rigueur technique, la créativité
            dans la résolution de problèmes, et une volonté constante d'apprendre et de m'améliorer.
            Chaque projet m'a permis de renforcer mes compétences et de découvrir de nouvelles technologies.
          </p>
        </div>

        {/* Compétences */}
        <div className="space-y-8">
          {competences.map((competence) => {
            const relatedProjects = projects.filter((project) =>
              competence.projects.includes(project.id)
            );

            return (
              <div
                key={competence.id}
                id={competence.id}
                className="bg-white rounded-lg shadow-md overflow-hidden scroll-mt-20"
              >
                {/* Header with colored bar */}
                <div className={`${competence.color} h-2`}></div>

                <div className="p-8">
                  {/* Title & Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl flex-shrink-0">{competence.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{competence.title}</h2>
                      <p className="text-gray-600 text-lg">{competence.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Compétences techniques
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {competence.skills.map((skill, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evolution */}
                  <div className="mb-6 bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Mon évolution dans cette compétence
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{competence.evolution}</p>
                  </div>

                  {/* Related Projects */}
                  {relatedProjects.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Projets illustrant cette compétence ({relatedProjects.length})
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedProjects.map((project) => (
                          <Link
                            key={project.id}
                            to="/projets"
                            className="group border-2 border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all"
                          >
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary mb-2">
                              {project.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion & Bilan */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Bilan et perspectives</h2>
          <p className="text-lg leading-relaxed mb-4">
            Ces trois années de formation m'ont permis de construire une expertise solide en développement
            web full-stack. Au-delà des compétences techniques, j'ai appris à travailler en équipe,
            à gérer des projets complexes et à m'adapter rapidement aux nouvelles technologies.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Mon objectif est désormais d'intégrer une entreprise en CDI ou en alternance pour mettre
            mes compétences au service de projets concrets et impactants. Je suis particulièrement
            attiré par les environnements où je pourrai continuer à apprendre et à relever des défis techniques.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            En parallèle, je souhaite poursuivre mon développement professionnel à travers des certifications
            (AWS, React, etc.) et des formations spécialisées qui me permettront d'approfondir mon expertise
            et d'évoluer vers des postes à responsabilités.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projets"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
