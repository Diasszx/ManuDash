import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  BarChart3,
  PieChart,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import salesDashboardImg from "../../assets/sales-hover.png";
import financeDashboardImg from "../../assets/finance-hover.jpg";
import expensesDashboardImg from "../../assets/expenses-hover.jpeg";

const projects = [
  {
    id: "sales-dashboard",
    title: "Dashboard de vendas",
    description:
      " Dashboard interativo desenvolvido em Power BI para monitoramento de indicadores comerciais, permitindo analisar receita, custos, margem bruta e desempenho de vendas por período, gerente, vendedor e produto.",
    image: salesDashboardImg,
    icon: TrendingUp,
    gradient: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    id: "financial-dashboard",
    title: "Dashboard Financeiro",
    description:
      "Dashboard financeiro desenvolvido em Power BI para monitorar os principais indicadores da empresa, permitindo acompanhar receita, custos, despesas e lucro por meio de análises temporais, categorias e clientes em uma interface interativa.",
    image: financeDashboardImg,
    icon: DollarSign,
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: "expenses-dashboard",
    title: "Dashboard de Despesas",
    description:
      "Dashboard de despesas desenvolvido em Power BI para monitorar os gastos da empresa, permitindo analisar despesas por centro de custo, acompanhar a evolução dos gastos ao longo do tempo e visualizar o saldo financeiro em uma interface interativa.",
    image: expensesDashboardImg,
    icon: BarChart3,
    gradient: "from-purple-500/20 to-purple-600/10",
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <Link to={`/projeto/${project.id}`}>
      <motion.article
        className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:border-primary/30 h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-surface/80 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-8 h-8 text-text-primary" />
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex flex-col flex-1 p-6 md:p-8">
          <h3 className="font-heading text-lg md:text-xl tracking-wider uppercase text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-text-muted text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 font-medium">
            Objetivos e KPIs
          </p>

          <p className="text-text-secondary leading-relaxed text-sm flex-1 mb-8">
            {project.description}
          </p>

          <Button
            variant="secondary"
            className="group/btn w-full justify-between border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 mt-auto"
            as="span"
          >
            Ver mais
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.article>
    </Link>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section id="dashboards" className="py-24 md:py-32 bg-surface">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 md:mb-16">
              <SectionTitle className="mb-4">Projetos em Destaque</SectionTitle>
              <p className="text-text-secondary text-lg max-w-2xl">
                Cases de Business Intelligence que transformaram dados em
                decisões estratégicas e resultados mensuráveis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
