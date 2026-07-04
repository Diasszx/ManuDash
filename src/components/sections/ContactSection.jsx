import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/emanuelly-fernandes/" },
  { icon: Mail, label: "Email", href: "mailto:emanuellyfefernandes@gmail.com" },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-surface">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle className="mb-6">
                Vamos transformar
                <br />
                seus dados em decisões?
              </SectionTitle>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-md">
                Estou disponível para projetos de Business Intelligence, 
                desenvolvimento de dashboards e consultoria em analytics. 
                Vamos conversar sobre como posso ajudar seu negócio.
              </p>
              <Button className="group">
                Iniciar conversa
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-text-muted text-sm uppercase tracking-widest mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:emanuellyfefernandes@gmail.com"
                    className="text-text-primary text-xl hover:text-primary transition-colors"
                  >
                    emanuellyfefernandes@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-text-muted text-sm uppercase tracking-widest mb-4">
                    LinkedIn
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                          aria-label={link.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-text-muted text-sm uppercase tracking-widest mb-2">
                    Disponibilidade
                  </h3>
                  <p className="text-text-secondary">
                    Aberto a projetos freelance e oportunidades de colaboração
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
