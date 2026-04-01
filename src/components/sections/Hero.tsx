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
 
// ——— Icônes SVG ———
 
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400" fill="currentColor">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
  </svg>
);
 
const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-blue-300" fill="currentColor">
    <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z" />
  </svg>
);
 
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-gray-300" fill="currentColor">
    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);
 
const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-400" fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6M7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
  </svg>
);
 
const LuaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-indigo-400" fill="currentColor">
    <path d="M10.5 5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM10.5 3a9.5 9.5 0 110 19 9.5 9.5 0 010-19zM20 3a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);
 
const ReduxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-purple-400" fill="currentColor">
    <path d="M16.63 16.56c.78-.06 1.37-.71 1.34-1.5-.03-.79-.68-1.41-1.47-1.41h-.05c-.81.03-1.44.7-1.41 1.52.02.39.17.73.41.97-.86 1.71-2.17 2.96-4.14 4.02-1.34.72-2.74 1-4.13.81-1.13-.15-2.01-.66-2.56-1.52-.81-1.26-.91-2.62-.29-3.97.44-.96 1.14-1.67 1.58-2.01-.09-.31-.24-.84-.33-1.23-3.49 2.55-3.13 6-.78 7.6.76.47 1.63.7 2.55.7 2.67-.01 4.67-1.38 6.28-3.98zm3.59-3.72c-1.83-2.15-4.53-3.33-7.61-3.33h-.4c-.22-.45-.69-.74-1.22-.74h-.05c-.81.03-1.44.7-1.41 1.52.03.79.68 1.41 1.47 1.41h.05c.54-.02.99-.36 1.2-.82h.44c1.82 0 3.54.53 5.1 1.56 1.19.79 2.05 1.8 2.52 3.01.4.99.39 1.96-.04 2.77-.65 1.25-1.74 1.93-3.18 1.93-.92 0-1.79-.28-2.24-.5-.27.24-.74.63-1.08.87 1.04.49 2.1.77 3.12.77 2.31 0 4.02-1.28 4.68-2.56.7-1.39.65-3.79-1.35-5.89zM7.23 16.07c.03.79.68 1.41 1.47 1.41h.05c.81-.03 1.44-.7 1.41-1.52-.03-.79-.68-1.41-1.47-1.41h-.05c-.05 0-.13 0-.19.02-1.16-1.95-1.65-4.07-1.48-6.36.13-1.7.72-3.18 1.76-4.39.86-1 2.41-1.49 3.47-1.53 2.97-.05 4.23 3.66 4.31 5.15.31.08.83.24 1.19.38C16.59 4.01 14.24 2 11.99 2c-2.09 0-4.02 1.53-4.79 3.79-1.07 3.07-.38 6.02.81 8.36-.13.19-.2.43-.18.72z" />
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
 
      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
 
      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
 
        {/* Orbiting Circles */}
        <BlurFade delay={0.05}>
          <div className="relative h-[320px] w-full mb-4 -mt-20 flex items-center justify-center">
 
            {/* Cercle central */}
            <div className="absolute w-24 h-24 rounded-full bg-blue-500/10 border-2 border-blue-500/25 flex items-center justify-center z-10 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
              <span className="font-heading text-3xl font-bold text-blue-400">RG</span>
            </div>
 
            {/* Orbite intérieure — React, TypeScript, GitHub */}
            <OrbitingCircles radius={120} duration={25} iconSize={42} path>
              <ReactIcon />
              <TypeScriptIcon />
              <GithubIcon />
            </OrbitingCircles>
 
            {/* Orbite extérieure — Tailwind, Lua, Redux */}
            <OrbitingCircles radius={190} duration={35} reverse iconSize={38} path>
              <TailwindIcon />
              <LuaIcon />
              <ReduxIcon />
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