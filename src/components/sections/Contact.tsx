import { useState, type FormEvent } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
 
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/eromixx",
    icon: Github,
    username: "@eromixx",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ton-profil",
    icon: Linkedin,
    username: "Romain Gabylone",
  },
  {
    label: "Email",
    href: "mailto:eromixx69@gmail.com",
    icon: Mail,
    username: "eromixx69@gmail.com",
  },
];
 
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
 
type FormStatus = "idle" | "sending" | "success" | "error";
 
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
 
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
 
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
 
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
 
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
 
    if (!validate()) return;
 
    setStatus("sending");
 
    try {
      const response = await fetch(
        "https://formspree.io/f/mgonjvej",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
 
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
 
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-sm text-blue-400 mb-3">
              &lt;Contact /&gt;
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Un projet en tête ? Une question ? N'hésitez pas à me contacter,
              je vous répondrai dans les plus brefs délais.
            </p>
          </div>
        </BlurFade>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Formulaire — 7 colonnes */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2}>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl bg-bg-card border border-blue-500/20">
                  <CheckCircle className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-sm text-text-muted text-center mb-6">
                    Merci pour votre message. Je vous répondrai très vite.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-border-medium"
                    onClick={() => setStatus("idle")}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-bg-card border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 ${
                        errors.name
                          ? "border-red-500/50 focus:ring-red-500/40"
                          : "border-border-subtle focus:border-blue-500/50"
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
 
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-bg-card border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 ${
                        errors.email
                          ? "border-red-500/50 focus:ring-red-500/40"
                          : "border-border-subtle focus:border-blue-500/50"
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
 
                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-bg-card border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:ring-red-500/40"
                          : "border-border-subtle focus:border-blue-500/50"
                      }`}
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
 
                  {/* Erreur globale */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      Une erreur est survenue. Veuillez réessayer ou me contacter
                      directement par email.
                    </div>
                  )}
 
                  {/* Bouton envoyer */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full rounded-xl font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_24px_rgba(37,99,235,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </BlurFade>
          </div>
 
          {/* Infos de contact — 5 colonnes */}
          <div className="lg:col-span-5">
            <BlurFade delay={0.35}>
              <div className="space-y-6">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  Autres moyens de contact
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Vous pouvez également me retrouver sur ces plateformes. Je suis
                  toujours ouvert aux échanges et aux nouvelles collaborations.
                </p>
 
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <BlurFade key={social.label} delay={0.4 + index * 0.1}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-blue-500/25 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors duration-300">
                          <social.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            {social.label}
                          </p>
                          <p className="text-xs text-text-muted">
                            {social.username}
                          </p>
                        </div>
                      </a>
                    </BlurFade>
                  ))}
                </div>
 
                {/* Disponibilité */}
                <BlurFade delay={0.7}>
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                      </span>
                      <span className="text-sm font-medium text-blue-400">
                        Disponible
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Je suis actuellement disponible pour des missions freelance
                      en développement Front-End React.
                    </p>
                  </div>
                </BlurFade>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
 