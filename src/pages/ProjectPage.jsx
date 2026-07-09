import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import {
  ArrowLeft,
  Target,
  Database,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/Button";

export function ProjectPage() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        {/* Hero Project */}
        <section className="py-16 md:py-24 bg-background">
          <div className="px-4 md:px-8 lg:px-12">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>

              <h1 className="font-heading text-[clamp(2.5rem,6vw,4rem)] text-text-primary mb-4">
                {project.title}
              </h1>
              <p className="text-text-secondary text-xl mb-6">
                {project.subtitle}
              </p>
              <p className="text-text-secondary max-w-3xl mb-8">
                {project.objective}
              </p>

              {/* Technologies & KPIs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm text-text-secondary border border-border rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.kpis.map((kpi) => (
                  <span
                    key={kpi}
                    className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Images */}
        <section className="py-12 bg-surface">
          <div className="px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-card border border-border rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="py-16 bg-background">
          <div className="px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl md:text-3xl text-text-primary mb-8">
                  Demonstração em Vídeo
                </h2>
                <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden">
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} Demo`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="font-heading text-[clamp(2rem,5vw,3rem)] text-text-primary mb-12 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Estudo de Caso
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Problem */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="font-heading text-xl text-text-primary">
                      Problema
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </motion.div>

                {/* Data */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Database className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-heading text-xl text-text-primary">
                      Dados
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.caseStudy.data}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="font-heading text-xl text-text-primary">
                      Solução
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </motion.div>

                {/* Impact */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="font-heading text-xl text-text-primary">
                      Impacto
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.caseStudy.impact}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="px-4 md:px-8 lg:px-12">
            <motion.div
              className="max-w-7xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl text-text-primary mb-4">
                Interessado em um projeto similar?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Vamos conversar sobre como posso ajudar sua empresa a
                transformar dados em decisões estratégicas.
              </p>
              <a
                href="https://wa.me/558398249382?text=Gostaria%20de%20uma%20consultoria%20BI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group">
                  Iniciar projeto
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
