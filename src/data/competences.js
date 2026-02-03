export const competences = [
  {
    id: 'realiser',
    title: 'Développement d\'applications',
    shortTitle: 'Développement',
    description: 'Conception et développement d\'applications web complètes, de la maquette au déploiement.',
    icon: '💻',
    color: 'bg-blue-500',
    skills: [
      'Développement Front-end (React, Vue.js, HTML/CSS/JavaScript)',
      'Développement Back-end (Node.js, Express, Spring Boot)',
      'Création d\'API RESTful',
      'Intégration de bases de données (MongoDB, PostgreSQL, MySQL)',
      'Responsive Design et UX/UI',
      'Tests unitaires et d\'intégration'
    ],
    projects: [1, 2, 3, 4, 5], // IDs des projets liés
    evolution: "Au cours de ma formation, j'ai progressivement maîtrisé le développement full-stack. Parti de sites web statiques simples, je suis maintenant capable de créer des applications complexes avec architecture client-serveur, gestion d'état avancée et communication en temps réel. Mon projet e-commerce a particulièrement consolidé mes compétences en intégration de systèmes de paiement et gestion de données volumineuses."
  },
  {
    id: 'optimiser',
    title: 'Optimisation et performance',
    shortTitle: 'Optimisation',
    description: 'Amélioration des performances, de la qualité du code et de l\'expérience utilisateur.',
    icon: '⚡',
    color: 'bg-yellow-500',
    skills: [
      'Optimisation des performances web (Lighthouse, Core Web Vitals)',
      'Optimisation des requêtes base de données',
      'Mise en cache (Redis, localStorage)',
      'Code splitting et lazy loading',
      'Optimisation SEO',
      'Analyse et résolution de problèmes de performance'
    ],
    projects: [1, 3, 5],
    evolution: "J'ai développé une approche méthodique de l'optimisation : mesurer, analyser, optimiser, vérifier. Sur mon projet de dashboard de visualisation, j'ai réduit le temps de chargement de 4s à 1.2s en optimisant les requêtes et en implémentant du lazy loading. Cette expérience m'a appris l'importance de penser performance dès la conception."
  },
  {
    id: 'administrer',
    title: 'Administration et infrastructure',
    shortTitle: 'Administration',
    description: 'Gestion des bases de données, déploiement et maintenance des applications.',
    icon: '🛠️',
    color: 'bg-green-500',
    skills: [
      'Gestion de bases de données (SQL et NoSQL)',
      'Déploiement d\'applications (Vercel, Heroku, Docker)',
      'Configuration serveurs et environnements',
      'Sécurité applicative (HTTPS, JWT, sanitization)',
      'Monitoring et logging',
      'Sauvegarde et restauration de données'
    ],
    projects: [1, 2, 4],
    evolution: "J'ai progressivement compris que développer une application ne suffit pas : il faut aussi la déployer, la sécuriser et la maintenir. Durant mon stage, j'ai appris à configurer des environnements de production, mettre en place des pipelines CI/CD basiques et gérer des bases de données en production avec sauvegardes automatisées."
  },
  {
    id: 'gerer',
    title: 'Gestion de projet',
    shortTitle: 'Gestion',
    description: 'Organisation, planification et suivi des projets de développement.',
    icon: '📊',
    color: 'bg-purple-500',
    skills: [
      'Méthodologies agiles (Scrum, Kanban)',
      'Gestion de versions (Git, GitHub)',
      'Planification et estimation de tâches',
      'Rédaction de documentation technique',
      'Suivi d\'avancement et reporting',
      'Gestion des dépendances et outils de build'
    ],
    projects: [1, 2, 4],
    evolution: "Travailler en équipe sur des projets complexes m'a fait comprendre l'importance d'une bonne gestion. J'utilise Git quotidiennement avec une stratégie de branching claire, je découpe mes tâches en user stories, et je maintiens une documentation à jour. Sur le projet e-commerce, j'ai coordonné le travail de l'équipe front-end en organisant des daily meetings et en utilisant un tableau Kanban."
  },
  {
    id: 'conduire',
    title: 'Conduite de projets',
    shortTitle: 'Conduite',
    description: 'Analyse des besoins, conception de solutions et pilotage de réalisations.',
    icon: '🎯',
    color: 'bg-red-500',
    skills: [
      'Analyse des besoins client',
      'Conception d\'architecture logicielle',
      'Modélisation UML (diagrammes de classes, use case)',
      'Rédaction de cahiers des charges',
      'Respect des délais et des budgets',
      'Présentation de livrables'
    ],
    projects: [1, 3, 4],
    evolution: "J'ai appris à prendre du recul avant de coder : comprendre le besoin, proposer des solutions, modéliser l'architecture. Sur le projet d'API de bibliothèque, j'ai mené l'analyse des besoins, créé les diagrammes UML et défini les endpoints avec l'équipe avant de commencer le développement. Cette approche a évité de nombreux allers-retours."
  },
  {
    id: 'collaborer',
    title: 'Travail en équipe',
    shortTitle: 'Collaboration',
    description: 'Communication, collaboration et contribution au sein d\'une équipe de développement.',
    icon: '🤝',
    color: 'bg-indigo-500',
    skills: [
      'Travail en équipe pluridisciplinaire',
      'Communication technique et non-technique',
      'Revue de code (code review)',
      'Pair programming',
      'Partage de connaissances et mentoring',
      'Gestion de conflits et feedback constructif'
    ],
    projects: [1, 2, 4],
    evolution: "La collaboration est devenue une de mes forces. J'ai appris à communiquer clairement mes idées, à accepter les critiques constructives et à faire des code reviews pertinentes. Durant le projet e-commerce, nous avons mis en place des sessions de pair programming qui ont considérablement amélioré la qualité du code et permis un partage de compétences efficace entre membres de l'équipe."
  }
];

// Fonction helper pour obtenir une compétence par ID
export const getCompetenceById = (id) => {
  return competences.find(comp => comp.id === id);
};

// Fonction helper pour obtenir toutes les compétences liées à un projet
export const getCompetencesByProjectId = (projectId) => {
  return competences.filter(comp => comp.projects.includes(projectId));
};
