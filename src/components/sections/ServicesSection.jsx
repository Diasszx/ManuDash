import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import {
  LayoutDashboard,
  Lightbulb,
  Target,
  BarChart2,
  FileText,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    description:
      "Criação de dashboards interativos e intuitivos no Power BI, conectando múltiplas fontes de dados para visão 360° do negócio.",
  },
  {
    icon: Lightbulb,
    title: "Business Intelligence Consulting",
    description:
      "Consultoria estratégica para implementação de cultura data-driven, definição de arquitetura de dados e melhores práticas.",
  },
  {
    icon: Target,
    title: "KPI Definition",
    description:
      "Definição e mapeamento de indicadores-chave de performance alinhados aos objetivos estratégicos do negócio.",
  },
  {
    icon: BarChart2,
    title: "Data Visualization",
    description:
      "Design de visualizações que comunicam insights complexos de forma clara e acionável para diferentes públicos.",
  },
  {
    icon: FileText,
    title: "Executive Reports",
    description:
      "Relatórios executivos automatizados com foco em storytelling de dados para apoiar decisões de alta gestão.",
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description:
      "Análise exploratória de dados para identificar tendências, padrões e oportunidades de melhoria nos processos.",
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group p-6 md:p-8 bg-card border border-border hover:border-primary/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-text-primary font-heading text-xl mb-3">
        {service.title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle className="mb-4">Serviços</SectionTitle>
            <p className="text-text-secondary text-lg">
              Soluções de Business Intelligence e Analytics para transformar
              dados em vantagem competitiva
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
