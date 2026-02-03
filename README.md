# Portfolio - Marwane Ibrahim

Portfolio personnel de Marwane Ibrahim, étudiant en 3ème année de BUT Informatique, développeur web full-stack.

## 🎯 Objectif

Ce portfolio a été créé dans le cadre de l'évaluation du semestre 6 du BUT Informatique. Il présente mes compétences, mes projets et mon parcours de manière professionnelle et interactive.

## ✨ Fonctionnalités

- **Page d'accueil** : Présentation personnelle avec photo, compétences clés et projets en vedette
- **Page Projets** : Présentation détaillée de 5 projets avec contexte (client, besoin, solution, résultat)
- **Page Compétences** : 6 domaines de compétences avec évolution personnelle et liens vers les projets associés
- **Page Contact** : Formulaire de contact et informations de contact
- **Navigation fixe** : Menu always-on-top avec indicateur de page active
- **Design responsive** : Compatible mobile, tablette et desktop
- **Liens transversaux** : Navigation entre projets et compétences (transitivité)
- **CV téléchargeable** : CV au format HTML téléchargeable

## 🛠️ Technologies utilisées

- **Frontend** : React 18 + Vite
- **Styling** : Tailwind CSS
- **Routing** : React Router DOM
- **Icons** : React Icons
- **Deployment** : Prêt pour Vercel / Netlify

## 📋 Conformité avec la grille d'évaluation

### Site web personnel - Portfolio (20 points)

✅ Page d'accueil de présentation avec photo
✅ Menu identifiable, visible (always on top) et cohérent
✅ Compétences et projets dans le menu
✅ Ergonomie : Homogénéité des pages, moins de 3 polices, contenu hiérarchisé
✅ Personnalisation de la présentation des compétences
✅ Hyperlien entre "Projets" et "Compétences" (transitivité)
✅ Description et illustration des projets sur le site
✅ Orthographe, syntaxe, ponctuation corrects
✅ Discours adapté à l'utilisateur (pas de terminologie BUT)
✅ Site complet (lien GitHub + CV + formulaire de contact)

### Valorisation des compétences - PPP (16 points)

✅ Intro : présentation personnelle
✅ Compte rendu de l'évolution des compétences
✅ Illustration par des exemples précis
✅ Mise en contexte des exemples (client, besoin, solution, résultat)
✅ Lien entre "projets" et "compétences" (avec transitivité)
✅ Conclusion : bilan, ouverture sur la poursuite d'études
✅ Discours positif et adapté au recruteur

## 🚀 Installation et lancement

### Prérequis

- Node.js (version 20 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/marwane-ibrahim/portfolio

# Aller dans le dossier
cd portfolio-marwane

# Installer les dépendances
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build pour la production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

### Preview du build de production

```bash
npm run preview
```

## 📁 Structure du projet

```
portfolio-marwane/
├── public/
│   └── cv-marwane-ibrahim.pdf     # CV téléchargeable
├── src/
│   ├── components/                 # Composants réutilisables
│   │   ├── Navbar.jsx             # Navigation fixe
│   │   ├── Footer.jsx             # Pied de page
│   │   └── Layout.jsx             # Layout global
│   ├── pages/                      # Pages du site
│   │   ├── Home.jsx               # Page d'accueil
│   │   ├── Projets.jsx            # Liste des projets
│   │   ├── Competences.jsx        # Compétences détaillées
│   │   └── Contact.jsx            # Formulaire de contact
│   ├── data/                       # Données
│   │   ├── projects.js            # Liste des projets
│   │   └── competences.js         # Liste des compétences
│   ├── App.jsx                     # Configuration des routes
│   ├── main.jsx                    # Point d'entrée
│   └── index.css                   # Styles globaux
├── tailwind.config.js              # Configuration Tailwind
├── vite.config.js                  # Configuration Vite
└── package.json
```

## 🎨 Personnalisation

### Modifier les projets

Éditez le fichier `src/data/projects.js` pour ajouter/modifier les projets.

### Modifier les compétences

Éditez le fichier `src/data/competences.js` pour ajouter/modifier les compétences.

### Modifier les couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

```javascript
colors: {
  primary: '#3B82F6',    // Bleu principal
  secondary: '#1E40AF',  // Bleu foncé
  accent: '#60A5FA',     // Bleu clair
}
```

### Modifier les informations personnelles

- Photo de profil : Dans `src/pages/Home.jsx` (ligne avec l'image Unsplash)
- Nom, email, téléphone : Dans les fichiers de pages (Home, Contact) et le Footer
- Liens sociaux : Dans `src/components/Footer.jsx`

## 📦 Déploiement

### Déploiement sur Vercel

1. Push le projet sur GitHub
2. Connectez-vous sur [Vercel](https://vercel.com)
3. Importez le repository
4. Vercel détectera automatiquement la configuration Vite
5. Déployez !

### Déploiement sur Netlify

1. Push le projet sur GitHub
2. Connectez-vous sur [Netlify](https://netlify.com)
3. Importez le repository
4. Build command : `npm run build`
5. Publish directory : `dist`
6. Déployez !

## 📝 Notes importantes

### CV

Le CV est actuellement au format HTML dans le dossier `public/`. Pour une vraitable conversion en PDF :

1. Ouvrez le fichier dans un navigateur
2. Utilisez "Imprimer" > "Enregistrer au format PDF"
3. Ou utilisez un outil en ligne comme [HTML to PDF](https://www.html2pdf.com/)

### Formulaire de contact

Le formulaire de contact est actuellement en mode simulation (pas d'envoi réel). Pour l'activer :

- Utilisez un service comme [EmailJS](https://www.emailjs.com/)
- Ou créez une API backend avec Nodemailer
- Ou utilisez [Formspree](https://formspree.io/)

### Images

Les images des projets utilisent actuellement Unsplash. Pour un portfolio réel :

- Remplacez par des captures d'écran réelles de vos projets
- Ajoutez les images dans `public/images/`
- Mettez à jour les URLs dans `src/data/projects.js`

## 🔗 Liens utiles

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## 👤 Auteur

**Marwane Ibrahim**

- Portfolio : [Votre site]
- LinkedIn : [linkedin.com/in/marwane-ibrahim](https://linkedin.com/in/marwane-ibrahim)
- GitHub : [github.com/marwane-ibrahim](https://github.com/marwane-ibrahim)
- Email : marwane.ibrahim@example.com

## 📄 Licence

Ce projet est à usage personnel pour l'évaluation académique.

---

**Dernière mise à jour** : Janvier 2025
