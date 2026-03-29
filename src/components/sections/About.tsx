import { BlurFade } from "@/components/ui/blur-fade";
import { Code, Rocket, Search, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
 
const timeline = [
  {
    period: "Avant",
    title: "Commerce & Vente",
    description:
      "Expérience dans le commerce qui m'a appris le sens du client, la communication et la gestion de projet au quotidien.",
  },
  {
    period: "Reconversion",
    title: "Formation OpenClassrooms",
    description:
      "Parcours Développeur Web Front-End : React, TypeScript, Redux, SEO, accessibilité, gestion de projet Agile.",
  },
  {
    period: "Aujourd'hui",
    title: "Développeur Freelance",
    description:
      "Spécialisé en React et optimisation web, je crée des interfaces performantes et accessibles pour mes clients.",
  },
];
 
const strengths = [
  {
    icon: Code,
    title: "React & TypeScript",
    description:
      "Création d'interfaces modernes avec React, Redux Toolkit et TypeScript. Architecture composants réutilisables.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Optimisation technique pour le référencement naturel, Core Web Vitals et accessibilité WCAG.",
  },
  {
    icon: Wrench,
    title: "Résolution de problèmes",
    description:
      "Debugging méthodique, tests unitaires et refactoring. Chaque bug est une opportunité d'améliorer le code.",
  },
  {
    icon: Rocket,
    title: "Autonomie & Rigueur",
    description:
      "Habitué à gérer des projets de A à Z en freelance, avec une communication claire et des livrables soignés.",
  },
];
 
export default function About() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <section id="a-propos" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-blue-400 mb-3">
              &lt;À propos /&gt;
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Mon parcours
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Du commerce au code — une reconversion guidée par la passion de
              résoudre des problèmes et de créer des expériences web.
            </p>
          </div>
        </BlurFade>
 
        {/* Pitch + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Pitch personnel */}
          <BlurFade delay={0.2}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                Qui suis-je ?
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Je suis{" "}
                  <span className="text-text-primary font-medium">
                    Romain Gabylone
                  </span>
                  , développeur Front-End spécialisé en{" "}
                  <span className="text-blue-400">React</span> et en{" "}
                  <span className="text-blue-400">
                    optimisation de performance web
                  </span>
                  .
                </p>
                <p>
                  Issu du monde du commerce, j'ai développé un sens aigu du
                  besoin client et de la communication. En découvrant le
                  développement web, j'ai trouvé le terrain idéal pour combiner
                  ma logique commerciale avec ma passion pour la résolution de
                  problèmes techniques.
                </p>
                <p>
                  Ma formation chez{" "}
                  <span className="text-text-primary font-medium">
                    OpenClassrooms
                  </span>{" "}
                  m'a permis de maîtriser React, TypeScript, Redux Toolkit et
                  les bonnes pratiques SEO. J'ai notamment atteint un score
                  SEO de 100 sur Lighthouse lors de l'optimisation d'un site
                  professionnel.
                </p>
                <p>
                  Aujourd'hui, je me lance en{" "}
                  <span className="text-text-primary font-medium">
                    freelance
                  </span>{" "}
                  avec une conviction : un code propre et des interfaces
                  performantes ne sont pas un luxe, mais la base d'une bonne
                  expérience utilisateur.
                </p>
              </div>
 
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="rounded-full border-border-medium hover:border-blue-500/30 hover:bg-bg-tertiary transition-all duration-300"
                  onClick={() => handleScroll("#contact")}
                >
                  Me contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </BlurFade>
 
          {/* Timeline */}
          <BlurFade delay={0.35}>
            <div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                Mon chemin
              </h3>
              <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />
 
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <BlurFade key={item.period} delay={0.4 + index * 0.12}>
                      <div className="flex gap-5">
                        {/* Point sur la timeline */}
                        <div className="relative flex-shrink-0 mt-1.5">
                          <div
                            className={`w-[15px] h-[15px] rounded-full border-2 ${
                              index === timeline.length - 1
                                ? "border-blue-500 bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                                : "border-blue-500/40 bg-bg-primary"
                            }`}
                          />
                        </div>
 
                        {/* Contenu */}
                        <div className="pb-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/15 mb-2">
                            {item.period}
                          </span>
                          <h4 className="font-heading text-base font-semibold text-text-primary mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
 
        {/* Points forts */}
        <BlurFade delay={0.5}>
          <h3 className="font-heading text-xl font-semibold text-text-primary text-center mb-10">
            Ce que j'apporte
          </h3>
        </BlurFade>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((strength, index) => (
            <BlurFade key={strength.title} delay={0.55 + index * 0.1}>
              <div className="group p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-blue-500/25 transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center mb-4 group-hover:bg-blue-500/15 transition-colors duration-300">
                  <strength.icon className="h-5 w-5 text-blue-400" />
                </div>
                <h4 className="font-heading text-sm font-semibold text-text-primary mb-2">
                  {strength.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}