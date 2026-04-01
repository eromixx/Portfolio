import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
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
 
// Icônes SVG simples pour les orbites
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400" fill="currentColor">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
  </svg>
);
 
const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-300" fill="currentColor">
    <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z" />
  </svg>
);
 
const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-400" fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6M7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
  </svg>
);
 
const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-400" fill="currentColor">
    <path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 002 2 2 2 0 002-2c0-.74-.4-1.39-1-1.73V9.41l1.35 1.36c-.05.15-.07.32-.07.49a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2c-.17 0-.34.02-.49.07l-1.86-1.86c.24-.86-.15-1.78-.93-2.23L12.7 4.8l.19-.18a.996.996 0 000-1.41L11.46 1.8a.996.996 0 00-1.41 0L2.6 9.18a.996.996 0 000 1.41z" />
  </svg>
);
 
const SeoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-400" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);
 
const ViteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-400" fill="currentColor">
    <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
  </svg>
);
 
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
        
        {/* Orbiting Circles */}
        <BlurFade delay={0.05}>
          <div className="relative h-[200px] w-full mb-6 flex items-center justify-center">
            {/* Cercle central */}
            <div className="absolute w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center z-10">
              <span className="font-heading text-xl font-bold text-blue-400">RG</span>
            </div>
 
            {/* Orbite intérieure */}
            <OrbitingCircles radius={70} duration={25} iconSize={32}>
              <ReactIcon />
              <TypeScriptIcon />
              <TailwindIcon />
            </OrbitingCircles>
 
            {/* Orbite extérieure — sens inverse */}
            <OrbitingCircles radius={120} duration={30} reverse iconSize={28}>
              <GitIcon />
              <SeoIcon />
              <ViteIcon />
            </OrbitingCircles>
          </div>
        </BlurFade>
 
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
      <BlurFade delay={1.0}>
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
 