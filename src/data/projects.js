import salesDashboardImg from "../assets/sales-hover.png";
import financeDashboardImg from "../assets/finance-hover.jpg";
import expensesDashboardImg from "../assets/expenses-hover.jpeg";

export const projects = [
  {
    id: "sales-dashboard",
    title: "Dashboard de vendas",
    subtitle: "Análise Completa de Performance Comercial",
    objective:
      "Proporcionar visão integrada da performance de vendas para tomada de decisões rápidas e estratégicas.",
    technologies: ["Power BI", "Excel", "DAX"],
    kpis: [
      "Receita Total",
      "Taxa de Conversão",
      "Crescimento Ano a ano",
      "Ticket Médio",
    ],
    videoUrl: "https://www.youtube.com/embed/MCfjesO-7Cs",
    images: [salesDashboardImg],
    caseStudy: {
      problem:
        "Empresas precisam transformar grandes volumes de dados de vendas em informações claras para apoiar a tomada de decisão. Este projeto teve como objetivo desenvolver um dashboard que centralizasse os principais indicadores comerciais em uma interface intuitiva, facilitando a análise de desempenho.",
      data: "Foi utilizada uma base de dados fictícia para fins educacionais, contendo informações de vendas, clientes, produtos, vendedores e períodos. Os dados passaram por etapas de tratamento e modelagem para garantir consistência e possibilitar análises multidimensionais.",
      solution:
        "Desenvolvi um dashboard no Power BI utilizando modelagem dimensional em estrela, Power Query para transformação dos dados e DAX para criação de indicadores e métricas. Também foram implementados filtros interativos, drill-through, tooltips personalizados e navegação entre páginas para facilitar a exploração das informações.",
      impact:
        "O projeto resultou em um dashboard interativo capaz de apresentar indicadores de vendas de forma clara e organizada, permitindo análises por período, produto, região e vendedor. Além de consolidar conhecimentos em Business Intelligence, o projeto demonstra a aplicação de boas práticas de modelagem de dados, visualização e storytelling.",
    },
  },
  {
    id: "financial-dashboard",
    title: "Dashboard Financeiro",
    subtitle: "Visão Executiva de Saúde Financeira",
    objective:
      "Fornecer visão consolidada da saúde financeira para executivos e stakeholders, facilitando decisões estratégicas de investimento e controle de custos.",
    technologies: ["Power BI"],
    kpis: ["Margem Líquida", "Despesas vs Orçamento", "DRE Consolidada"],
    videoUrl: "https://www.youtube.com/embed/es3PRxPbsks",
    images: [financeDashboardImg],
    caseStudy: {
      problem:
        "Empresas precisam acompanhar seus indicado res financeiros de forma rápida e organizada para identificar variações de receita, custos e lucratividade, apoiando decisões estratégicas com base em dados.",
      data: "Base de dados fictícia para fins educacionais contendo informações financeiras, como receitas, custos, despesas, categorias, clientes e períodos, tratadas e modeladas para análise no Power BI.",
      solution:
        "Desenvolvimento de um dashboard financeiro utilizando Power BI, com tratamento dos dados no Power Query, modelagem dimensional e criação de medidas em DAX. O painel apresenta KPIs financeiros, evolução da receita ao longo do tempo, comparação entre custos e despesas, distribuição da receita por categoria e análise dos principais clientes, com filtros interativos para facilitar a exploração dos dados.",
      impact:
        "Dashboard interativo que consolida os principais indicadores financeiros em uma única interface, permitindo uma visão clara da performance financeira da empresa e demonstrando a aplicação de boas práticas em Business Intelligence, modelagem de dados e visualização de informações.",
    },
  },
  {
    id: "expenses-dashboard",
    title: "Dashboard de Despesas",
    subtitle: "Métricas de Campanhas e ROI",
    objective:
      "Acompanhar performance de campanhas digitais e calcular ROI em tempo real para otimização de investimentos em marketing.",
    technologies: ["Power BI"],
    kpis: ["Centro de Custos", "DRE Consolidada"],
    videoUrl: "https://www.youtube.com/embed/zkDiMBKtwog",
    images: [expensesDashboardImg],
    caseStudy: {
      problem:
        "O controle eficiente das despesas é essencial para manter a saúde financeira da empresa. Este projeto foi desenvolvido para centralizar as informações de gastos e facilitar a identificação dos principais centros de custo, apoiando análises financeiras e o controle orçamentário.",
      data: "Base de dados fictícia para fins educacionais contendo registros de despesas, categorias, centros de custo, períodos e movimentações financeiras, tratadas e modeladas para análise no Power BI.",
      solution:
        "Desenvolvimento de um dashboard em Power BI utilizando Power Query para tratamento dos dados, modelagem dimensional e medidas em DAX. O painel apresenta indicadores de despesas e saldo final, análise por centro de custo, evolução dos gastos por período e detalhamento das movimentações financeiras por categoria.",
      impact:
        "Dashboard interativo que consolida os principais indicadores de despesas em uma única interface, proporcionando uma visão clara da distribuição dos gastos, facilitando o acompanhamento financeiro e demonstrando a aplicação de boas práticas em Business Intelligence, modelagem de dados e visualização de informações.",
    },
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
