import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { Github, ExternalLink, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
 
const categoryLabels: Record<string, string> = {
  all: "Tous",
  react: "React",
  seo: "SEO",
  gestion: "Gestion de projet",
};
 
function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  return (
    <MagicCard
      className="cursor-pointer bg-bg-card border-border-subtle hover:border-blue-500/30 transition-all duration-500 group"
      gradientColor="rgba(37, 99, 235, 0.08)"
    >
      <div className="p-5" onClick={() => onSelect(project)}>
        {/* Image placeholder */}
        <div className="w-full h-44 rounded-lg bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-border-subtle mb-4 overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="font-mono text-sm text-text-muted">
            {project.title}
          </span>
          {/* Si tu as des images, remplace par : */}
          {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
        </div>
 
        {/* Catégorie */}
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/15 mb-3">
          {categoryLabels[project.category]}
        </span>
 
        {/* Titre et sous-titre */}
        <h3 className="font-heading text-lg font-semibold text-text-primary mb-1 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted mb-4 leading-relaxed line-clamp-2">
          {project.subtitle}
        </p>
 
        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-mono bg-bg-tertiary text-text-secondary border border-border-subtle"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-mono text-text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
 
        {/* Highlights */}
        <div className="space-y-1.5">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-xs text-text-secondary"
            >
              <ChevronRight className="h-3 w-3 text-blue-500 flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
 
        {/* Voir plus */}
        <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
          <span className="text-sm text-text-muted group-hover:text-blue-400 transition-colors">
            Voir le détail
          </span>
          <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </MagicCard>
  );
}
 
function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-bg-primary/80 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
 
      {/* Contenu */}
      <motion.div
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-bg-secondary border border-border-subtle shadow-[0_8px_64px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header modale */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 bg-bg-secondary/90 backdrop-blur-sm border-b border-border-subtle">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/15 mb-2">
              {categoryLabels[project.category]}
            </span>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              {project.title}
            </h2>
            <p className="text-sm text-text-muted mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
 
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-border-subtle flex items-center justify-center overflow-hidden">
            <span className="font-mono text-sm text-text-muted">
              {project.title} — Screenshot
            </span>
            {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
          </div>
 
          {/* Stack complète */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
 
          {/* Sections détaillées */}
          {[
            { title: "Contexte", content: project.context },
            { title: "Objectifs", content: project.objectives },
            { title: "Compétences développées", content: project.skills },
            { title: "Résultats et impact", content: project.results },
            {
              title: "Perspectives d'amélioration",
              content: project.improvements,
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
 
          {/* Liens */}
          <div className="flex gap-3 pt-4 border-t border-border-subtle">
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-border-medium hover:border-blue-500/30"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                Code source
              </Button>
            )}
            {project.demo && (
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-[0_4px_16px_rgba(37,99,235,0.25)]"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Démo live
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
 
export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
 
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);
 
  const categories = ["all", ...new Set(projects.map((p) => p.category))];
 
  return (
    <section id="projets" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête de section */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Mes réalisations
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Une sélection de projets réalisés durant ma formation de
              développeur web, démontrant une progression technique et une
              diversité de compétences.
            </p>
          </div>
        </BlurFade>
 
        {/* Filtres */}
        <BlurFade delay={0.2}>
          <div className="flex items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-blue-500/15 text-blue-400 border border-blue-500/25"
                    : "text-text-muted hover:text-text-secondary hover:bg-bg-tertiary border border-transparent"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </BlurFade>
 
        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <BlurFade key={project.id} delay={0.3 + index * 0.1}>
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </BlurFade>
          ))}
        </div>
      </div>
 
      {/* Modale détail */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}