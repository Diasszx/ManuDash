import salesDashboardImg from "../assets/sales-hover.png";

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
    title: "Dashboard de Despesas",
    subtitle: "Visão Executiva de Saúde Financeira",
    objective:
      "Fornecer visão consolidada da saúde financeira para executivos e stakeholders, facilitando decisões estratégicas de investimento e controle de custos.",
    technologies: ["Power BI", "Python", "SQL", "APIs Bancárias"],
    kpis: [
      "Cash Flow",
      "EBITDA",
      "Margem Líquida",
      "Despesas vs Orçamento",
      "DRE Consolidada",
    ],
    videoUrl: "https://www.youtube.com/embed/es3PRxPbsks",
    images: ["/dashboard-financial-1.jpg", "/dashboard-financial-2.jpg"],
    caseStudy: {
      problem:
        "A diretoria financeira não tinha visibilidade em tempo real da saúde financeira da empresa. O fechamento contábil levava 10 dias, impossibilitando decisões ágeis. Não havia consolidação automática das 7 unidades de negócio, e o fluxo de caixa era monitorado apenas semanalmente, causando surpresas desagradáveis.",
      data: "Integração de dados de 3 sistemas contábeis diferentes, 4 instituições bancárias via API, planilhas de orçamento e forecast. O histórico continha 5 anos de movimentações. O maior desafio foi padronizar o plano de contas entre as unidades e tratar variações cambiais de operações internacionais.",
      solution:
        "Construí um dashboard executivo com visão consolidada e drill-down por unidade de negócio. Implementei análise de fluxo de caixa preditivo usando Python para previsão de saldos. Criei comparativos orçado vs realizado com variância automática e alertas de desvios. Desenvolvi uma versão simplificada para o conselho com os principais indicadores.",
      impact:
        "Redução do tempo de fechamento de 10 para 4 dias. Identificação de R$ 2.3M em economia de custos através de análise de despesas. Melhoria no controle de fluxo de caixa reduzindo necessidade de linha de crédito em 40%. A diretoria passou a ter reuniões semanais baseadas em dados atualizados, aumentando a agilidade estratégica.",
    },
  },
  {
    id: "marketing-dashboard",
    title: "Dashboard de Despesas",
    subtitle: "Métricas de Campanhas e ROI",
    objective:
      "Acompanhar performance de campanhas digitais e calcular ROI em tempo real para otimização de investimentos em marketing.",
    technologies: ["Power BI", "Google Analytics 4", "Google Ads API", "SQL"],
    kpis: [
      "ROI por Canal",
      "CAC",
      "LTV",
      "Taxa de Conversão",
      "Leads Qualificados",
    ],
    videoUrl: "https://www.youtube.com/embed/zkDiMBKtwog",
    images: ["/dashboard-marketing-1.jpg"],
    caseStudy: {
      problem:
        "O time de marketing não conseguia mensurar o ROI das campanhas de forma ágil. Os dados estavam dispersos entre Google Ads, Meta Ads, LinkedIn e o CRM, exigindo consolidação manual. Não havia visibilidade do custo de aquisição por canal nem do lifetime value dos clientes.",
      data: "Extração automática via APIs do Google Ads, Meta Business, LinkedIn Campaign Manager e Google Analytics 4. Cruzamento com dados do CRM para identificar conversões e calcular LTV. Volume de 50k+ eventos diários. O desafio foi criar um modelo de atribuição que refletisse a jornada real do cliente.",
      solution:
        "Dashboard integrado com atualização horária mostrando performance por canal, campanha e criativo. Implementei modelo de atribuição multitoque. Criei funil de conversão completo desde impressão até receita. Desenvolvi alertas para campanhas com CPA acima do esperado e recomendações automáticas de reallocation de budget.",
      impact:
        "Aumento de 35% no ROI de campanhas após identificação de canais mais eficientes. Redução de 28% no CAC através de otimização contínua. O time passou a reagir em até 4 horas a campanhas underperforming vs 3 dias anteriormente. Economia de R$ 500k em investimentos ineficientes no primeiro semestre.",
    },
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
