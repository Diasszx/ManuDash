import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { ArrowUpRight, TrendingUp, DollarSign, BarChart3, PieChart } from "lucide-react";
import { Link } from "react-router-dom";
import salesDashboardImg from "../../assets/sales-dashboard.png";

const dashboards = [
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    objective: "Análise completa de performance de vendas",
    kpis: ["Revenue", "Growth", "Conversion"],
    technologies: ["Power BI", "Excel", "SQL"],
    icon: TrendingUp,
    image: salesDashboardImg,
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    objective: "Visão executiva de saúde financeira",
    kpis: ["Cash Flow", "Profitability", "EBITDA"],
    technologies: ["Power BI", "Python", "SQL"],
    icon: DollarSign,
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: "marketing-dashboard",
    title: "Marketing Dashboard",
    objective: "Métricas de campanhas e ROI",
    kpis: ["ROI", "CAC", "LTV"],
    technologies: ["Power BI", "Google Analytics", "SQL"],
    icon: BarChart3,
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    id: "operations-dashboard",
    title: "Operations Dashboard",
    objective: "Eficiência operacional e KPIs",
    kpis: ["Efficiency", "Quality", "SLA"],
    technologies: ["Power BI", "Excel", "DAX"],
    icon: PieChart,
    color: "from-orange-500/20 to-orange-600/10",
  },
];

function DashboardCard({ dashboard, index }) {
  const Icon = dashboard.icon;

  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/projeto/${dashboard.id}`} className="block">
        {/* Dashboard Preview */}
        <div className={`relative aspect-[16/10] mb-4 overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300 rounded-sm`}>
          {dashboard.image ? (
            <img
              src={dashboard.image}
              alt={dashboard.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${dashboard.color}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-surface/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-text-primary" />
                </div>
              </div>
            </div>
          )}
          
          {/* KPI Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {dashboard.kpis.map((kpi) => (
              <span 
                key={kpi}
                className="px-2 py-1 text-xs bg-background/80 backdrop-blur-sm text-text-secondary rounded"
              >
                {kpi}
              </span>
            ))}
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-text-primary font-medium text-lg mb-1 group-hover:text-primary transition-colors">
              {dashboard.title}
            </h3>
            <p className="text-text-secondary text-sm mb-2">{dashboard.objective}</p>
            <div className="flex flex-wrap gap-1">
              {dashboard.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-text-muted px-2 py-0.5 border border-border rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function FeaturedDashboardsSection() {
  return (
    <section id="dashboards" className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-8 lg:px-12">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle className="mb-4">Dashboards em Destaque</SectionTitle>
          <p className="text-text-secondary text-lg mb-12 md:mb-16 max-w-2xl">
            Soluções de Business Intelligence desenvolvidas para transformar dados 
            complexos em insights acionáveis e impulsionar decisões estratégicas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {dashboards.map((dashboard, index) => (
              <DashboardCard key={dashboard.id} dashboard={dashboard} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
