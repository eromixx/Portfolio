import { BlurFade } from "@/components/ui/blur-fade";
import { Code, Palette, Wrench, Users } from "lucide-react";
 
interface Skill {
  name: string;
  level: "Maîtrisé" | "Avancé" | "Intermédiaire";
}
 
interface SkillCategory {
  title: string;
  icon: typeof Code;
  description: string;
  skills: Skill[];
}
 
const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
    icon: Code,
    description: "Création d'interfaces modernes et réactives",
    skills: [
      { name: "React", level: "Maîtrisé" },
      { name: "TypeScript", level: "Avancé" },
      { name: "JavaScript ES6+", level: "Maîtrisé" },
      { name: "HTML5 sémantique", level: "Maîtrisé" },
      { name: "Redux Toolkit", level: "Avancé" },
      { name: "Framer Motion", level: "Intermédiaire" },
    ],
  },
  {
    title: "Styles & Design",
    icon: Palette,
    description: "Intégration responsive et design systems",
    skills: [
      { name: "Tailwind CSS", level: "Maîtrisé" },
      { name: "CSS3 / Flexbox / Grid", level: "Maîtrisé" },
      { name: "Shadcn/ui", level: "Avancé" },
      { name: "Responsive Design", level: "Maîtrisé" },
      { name: "Sass / CSS Modules", level: "Avancé" },
      { name: "Figma", level: "Intermédiaire" },
    ],
  },
  {
    title: "Outils & DevOps",
    icon: Wrench,
    description: "Environnement de développement et déploiement",
    skills: [
      { name: "Git / GitHub", level: "Maîtrisé" },
      { name: "Vite", level: "Avancé" },
      { name: "VS Code", level: "Maîtrisé" },
      { name: "Vercel / Netlify", level: "Avancé" },
      { name: "Lighthouse / WAVE", level: "Avancé" },
      { name: "Linux / Debian", level: "Avancé" },
    ],
  },
  {
    title: "Méthodologie",
    icon: Users,
    description: "Organisation et bonnes pratiques",
    skills: [
      { name: "SEO technique", level: "Avancé" },
      { name: "Accessibilité WCAG", level: "Avancé" },
      { name: "Agile / Kanban", level: "Avancé" },
      { name: "Tests unitaires (Jest)", level: "Intermédiaire" },
      { name: "API REST / Swagger", level: "Avancé" },
      { name: "Veille technologique", level: "Maîtrisé" },
    ],
  },
];
 
const levelColors: Record<string, string> = {
  Maîtrisé: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Avancé: "bg-blue-500/10 text-blue-300 border-blue-500/15",
  Intermédiaire: "bg-bg-tertiary text-text-secondary border-border-subtle",
};
 
export default function Skills() {
  return (
    <section id="competences" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-blue-400 mb-3">
              &lt;Compétences /&gt;
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Stack technique
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Les technologies et méthodologies que j'utilise au quotidien pour
              créer des applications web performantes et accessibles.
            </p>
          </div>
        </BlurFade>
 
        {/* Grille de catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <BlurFade key={category.title} delay={0.2 + catIndex * 0.12}>
              <div className="h-full p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-blue-500/20 transition-all duration-500 group">
                {/* Header catégorie */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors duration-300">
                    <category.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-text-primary">
                      {category.title}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {category.description}
                    </p>
                  </div>
                </div>
 
                {/* Liste des compétences */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-bg-tertiary/50 transition-colors duration-200"
                    >
                      <span className="text-sm text-text-secondary">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
 
        {/* Légende */}
        <BlurFade delay={0.7}>
          <div className="flex items-center justify-center gap-6 mt-10">
            {["Maîtrisé", "Avancé", "Intermédiaire"].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    level === "Maîtrisé"
                      ? "bg-blue-400"
                      : level === "Avancé"
                        ? "bg-blue-300/60"
                        : "bg-text-muted/40"
                  }`}
                />
                <span className="text-xs text-text-muted">{level}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}