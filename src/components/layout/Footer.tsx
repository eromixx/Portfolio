import { Github, Linkedin, Mail, Heart } from "lucide-react";
 
const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];
 
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/eromixx",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ton-profil",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:gabyloneromain@gmail.com",
    icon: Mail,
  },
];
 
export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + description */}
          <div className="text-center md:text-left">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#accueil");
              }}
              className="font-heading text-lg font-bold tracking-tight text-text-primary hover:text-blue-400 transition-colors"
            >
              Romain <span className="text-blue-500">Gabylone</span>
            </a>
            <p className="text-sm text-text-muted mt-1">
              Développeur Front-End React
            </p>
          </div>
 
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-text-muted hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
 
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-text-muted hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
 
        {/* Séparateur + copyright */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Romain Gabylone. Tous droits réservés.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Fait avec <Heart className="h-3 w-3 text-blue-500" /> en React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}