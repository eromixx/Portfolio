import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github } from "lucide-react";
 
const techStack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "SEO",
  "Node.js",
];
 
export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background effect */}
      <DotPattern
        className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
      />
 
      {/* Gradient glow derrière le contenu */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
 
      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-sm font-mono text-blue-300">
              Disponible pour de nouvelles opportunités
            </span>
          </div>
        </BlurFade>
 
        {/* Titre principal */}
        <BlurFade delay={0.2}>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-text-primary">Romain </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Gabylone
            </span>
          </h1>
        </BlurFade>
 
        {/* Sous-titre */}
        <BlurFade delay={0.35}>
          <p className="font-heading text-xl sm:text-2xl font-medium text-text-secondary mb-4">
            Développeur{" "}
            <span className="text-blue-400">Front-End React</span>
          </p>
        </BlurFade>
 
        {/* Description */}
        <BlurFade delay={0.5}>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Passionné par la création d'interfaces web modernes, accessibles et
            performantes. Spécialisé en React, TypeScript et optimisation SEO.
          </p>
        </BlurFade>
 
        {/* CTAs */}
        <BlurFade delay={0.65}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="rounded-full px-8 font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_24px_rgba(37,99,235,0.45)] transition-all duration-300"
              onClick={() => handleScroll("#projets")}
            >
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-medium border-border-medium hover:bg-bg-tertiary hover:border-blue-500/30 transition-all duration-300"
              onClick={() =>
                window.open("https://github.com/ton-user", "_blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </BlurFade>
 
        {/* Tech stack */}
        {/* Tech stack */}
        <BlurFade delay={0.8}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/15 hover:border-blue-500/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>
 
      {/* Scroll indicator */}
      <BlurFade delay={1.3}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-text-muted font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-border-medium flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 rounded-full bg-blue-400 animate-bounce" />
          </div>
        </div>
      </BlurFade>
    </section>
  );
}