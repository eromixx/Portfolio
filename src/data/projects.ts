export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  demo?: string;
  category: "react" | "seo" | "gestion";
  highlights: string[];
  context: string;
  objectives: string;
  skills: string;
  results: string;
  improvements: string;
}
 
export const projects: Project[] = [
  {
    id: "nina-carducci",
    title: "Nina Carducci",
    subtitle: "Optimisation SEO & Performance",
    description:
      "Audit et optimisation complète du référencement et des performances d'un site de photographe professionnel. Travail approfondi sur le SEO technique, l'accessibilité et les Core Web Vitals.",
    stack: ["SEO", "Lighthouse", "Schema.org", "Open Graph", "WebP", "Lazy Loading"],
    image: "/images/nina-carducci.webp",
    github: "https://github.com/eromixx/ninacarducci-seo",
    demo: "https://eromixx.github.io/ninacarducci-seo",
    category: "seo",
    highlights: [
      "Performance : 82",
      "Accessibilité : 96",
      "SEO : 100",
    ],
    context:
      "Nina Carducci est une photographe professionnelle dont le site présentait des problèmes de référencement et de performance impactant sa visibilité en ligne.",
    objectives:
      "Optimiser les performances du site, améliorer le référencement naturel et garantir l'accessibilité selon les standards WCAG.",
    skills:
      "Audit Lighthouse, compression d'images PNG vers JPEG/WebP, lazy loading, Schema.org JSON-LD, balises Open Graph, preload des ressources critiques.",
    results:
      "Scores Lighthouse finaux — Performance : 82, Accessibilité : 96, Best Practices : 93, SEO : 100. Amélioration significative du temps de chargement.",
    improvements:
      "Mise en place d'un CDN pour les images, migration vers un format d'image next-gen (AVIF), ajout d'un service worker pour le cache.",
  },
  {
    id: "argent-bank",
    title: "Argent Bank",
    subtitle: "Application bancaire React & Redux",
    description:
      "Développement du front-end d'une application bancaire avec système d'authentification JWT et gestion de profil utilisateur. Architecture state management avec Redux Toolkit.",
    stack: ["React", "Redux Toolkit", "API REST", "Swagger", "JWT", "Vite"],
    image: "/images/argent-bank.webp",
    github: "https://github.com/eromixx/argent-bank",
    category: "react",
    highlights: [
      "Authentification JWT",
      "State management Redux",
      "Documentation Swagger",
    ],
    context:
      "Argent Bank est une banque en ligne souhaitant migrer son site vers une application React moderne avec une API REST sécurisée.",
    objectives:
      "Implémenter l'authentification utilisateur, la gestion de profil et préparer la documentation API Swagger pour les futures fonctionnalités de transactions.",
    skills:
      "Architecture Redux Toolkit (store, slices, thunks), appels API REST avec gestion d'erreurs, routing protégé, optimisation d'images WebP via Squoosh.",
    results:
      "Application fonctionnelle avec login/logout, persistance de session, édition de profil. Routes protégées et documentation API complète pour les transactions.",
    improvements:
      "Implémentation complète des routes /accounts/{accountId}, ajout de tests unitaires, mise en place d'un refresh token.",
  },
  {
    id: "724events",
    title: "724events",
    subtitle: "Debugging & Tests React",
    description:
      "Résolution de bugs et écriture de tests pour une application React de gestion événementielle. Analyse approfondie du code existant et correction de composants défaillants.",
    stack: ["React", "Jest", "React Testing Library", "Debugging", "DevTools"],
    image: "/images/724events.webp",
    github: "https://github.com/eromixx/724events",
    category: "react",
    highlights: [
      "100% tests réussis",
      "5+ bugs critiques corrigés",
      "Refactoring composants",
    ],
    context:
      "724events est une agence événementielle dont l'application de vitrine contenait plusieurs bugs bloquants identifiés lors d'un audit technique.",
    objectives:
      "Identifier et corriger tous les bugs de l'application, écrire des tests unitaires pour prévenir les régressions et stabiliser le code.",
    skills:
      "Debugging avec React DevTools et Chrome DevTools, compréhension du cycle de vie React (useEffect, cleanup, closures), tests unitaires avec Jest.",
    results:
      "100% des tests passent avec succès. Bugs corrigés sur les composants Slider, Form, EventCard, Events et la fonction getMonth. Application stable et fonctionnelle.",
    improvements:
      "Augmenter la couverture de tests, ajouter des tests d'intégration E2E avec Cypress, mettre en place un CI/CD avec GitHub Actions.",
  },
  {
    id: "menu-maker",
    title: "Menu Maker by Qwenta",
    subtitle: "Gestion de projet & Spécifications",
    description:
      "Prise en charge du rôle de Product Owner pour la planification d'un outil de création de menus en ligne. Production de spécifications techniques, Kanban et veille technologique.",
    stack: ["Trello", "Feedly", "PowerPoint", "Agile", "Kanban", "Spécifications"],
    image: "/images/menu-maker.webp",
    github: "",
    category: "gestion",
    highlights: [
      "Kanban 40 cartes / 10 Epics",
      "Veille technologique structurée",
      "Spécifications complètes",
    ],
    context:
      "Qwenta développe Menu Maker, un outil permettant aux restaurateurs de créer et personnaliser leurs menus en ligne. Le projet nécessitait un cadrage technique complet.",
    objectives:
      "Organiser la planification du projet avec une méthodologie Agile, produire les spécifications techniques et mettre en place une veille technologique pertinente.",
    skills:
      "Rédaction de spécifications techniques, gestion de projet Agile/Kanban, veille technologique avec Feedly, présentation de solutions techniques au chef de projet.",
    results:
      "Kanban complet de 40 cartes réparties en 10 Epics sur Trello, document de spécifications techniques validé, flux RSS de veille technologique opérationnel.",
    improvements:
      "Intégrer un outil de suivi de temps (Clockify), automatiser le reporting avec des dashboards Trello Power-Ups.",
  },
];
