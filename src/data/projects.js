import salesDashboardImg from "../assets/sales-dashboard.png";

export const projects = [
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    subtitle: "Análise Completa de Performance Comercial",
    objective: "Proporcionar visão integrada da performance de vendas para tomada de decisões rápidas e estratégicas.",
    technologies: ["Power BI", "Excel", "SQL Server", "DAX"],
    kpis: ["Receita Total", "Taxa de Conversão", "Crescimento YoY", "Ticket Médio", "Vendas por Região"],
    videoUrl: "https://www.youtube.com/embed/MCfjesO-7Cs",
    images: [
      salesDashboardImg,
    ],
    caseStudy: {
      problem: "A empresa enfrentava dificuldades em acompanhar a performance de vendas em tempo real. Os relatórios eram gerados manualmente no Excel, levando dias para consolidar dados de múltiplas fontes (CRM, ERP, planilhas). A falta de visibilidade imediata impedia reações rápidas a quedas de vendas e oportunidades de crescimento.",
      data: "Foram integrados dados de 5 fontes distintas: CRM ( Salesforce), ERP (SAP), planilhas de metas, dados geográficos de regiões e histórico de vendas dos últimos 3 anos. O volume total era de aproximadamente 500k registros mensais. Os principais desafios foram a qualidade dos dados (inconsistências e duplicatas) e a necessidade de atualização diária.",
      solution: "Desenvolvi um dashboard no Power BI com modelagem dimensional em estrela, utilizando DAX para cálculos complexos de YoY, MoM e projeções. Implementei drill-through para análise detalhada por vendedor, produto e região. Criei alertas automáticos para variações anormais e uma interface mobile-friendly para acesso em campo pela equipe comercial.",
      impact: "Redução de 80% no tempo de geração de relatórios (de 3 dias para menos de 1 hora). Aumento de 23% na taxa de conversão após identificação de gargalos no funil. Melhoria de 15% na precisão de forecasting. O time comercial passou a tomar decisões baseadas em dados em tempo real, resultando em crescimento de 18% na receita no primeiro trimestre após implementação."
    }
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    subtitle: "Visão Executiva de Saúde Financeira",
    objective: "Fornecer visão consolidada da saúde financeira para executivos e stakeholders, facilitando decisões estratégicas de investimento e controle de custos.",
    technologies: ["Power BI", "Python", "SQL", "APIs Bancárias"],
    kpis: ["Cash Flow", "EBITDA", "Margem Líquida", "Despesas vs Orçamento", "DRE Consolidada"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "/dashboard-financial-1.jpg",
      "/dashboard-financial-2.jpg",
    ],
    caseStudy: {
      problem: "A diretoria financeira não tinha visibilidade em tempo real da saúde financeira da empresa. O fechamento contábil levava 10 dias, impossibilitando decisões ágeis. Não havia consolidação automática das 7 unidades de negócio, e o fluxo de caixa era monitorado apenas semanalmente, causando surpresas desagradáveis.",
      data: "Integração de dados de 3 sistemas contábeis diferentes, 4 instituições bancárias via API, planilhas de orçamento e forecast. O histórico continha 5 anos de movimentações. O maior desafio foi padronizar o plano de contas entre as unidades e tratar variações cambiais de operações internacionais.",
      solution: "Construí um dashboard executivo com visão consolidada e drill-down por unidade de negócio. Implementei análise de fluxo de caixa preditivo usando Python para previsão de saldos. Criei comparativos orçado vs realizado com variância automática e alertas de desvios. Desenvolvi uma versão simplificada para o conselho com os principais indicadores.",
      impact: "Redução do tempo de fechamento de 10 para 4 dias. Identificação de R$ 2.3M em economia de custos através de análise de despesas. Melhoria no controle de fluxo de caixa reduzindo necessidade de linha de crédito em 40%. A diretoria passou a ter reuniões semanais baseadas em dados atualizados, aumentando a agilidade estratégica."
    }
  },
  {
    id: "marketing-dashboard",
    title: "Marketing Dashboard",
    subtitle: "Métricas de Campanhas e ROI",
    objective: "Acompanhar performance de campanhas digitais e calcular ROI em tempo real para otimização de investimentos em marketing.",
    technologies: ["Power BI", "Google Analytics 4", "Google Ads API", "SQL"],
    kpis: ["ROI por Canal", "CAC", "LTV", "Taxa de Conversão", "Leads Qualificados"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "/dashboard-marketing-1.jpg",
    ],
    caseStudy: {
      problem: "O time de marketing não conseguia mensurar o ROI das campanhas de forma ágil. Os dados estavam dispersos entre Google Ads, Meta Ads, LinkedIn e o CRM, exigindo consolidação manual. Não havia visibilidade do custo de aquisição por canal nem do lifetime value dos clientes.",
      data: "Extração automática via APIs do Google Ads, Meta Business, LinkedIn Campaign Manager e Google Analytics 4. Cruzamento com dados do CRM para identificar conversões e calcular LTV. Volume de 50k+ eventos diários. O desafio foi criar um modelo de atribuição que refletisse a jornada real do cliente.",
      solution: "Dashboard integrado com atualização horária mostrando performance por canal, campanha e criativo. Implementei modelo de atribuição multitoque. Criei funil de conversão completo desde impressão até receita. Desenvolvi alertas para campanhas com CPA acima do esperado e recomendações automáticas de reallocation de budget.",
      impact: "Aumento de 35% no ROI de campanhas após identificação de canais mais eficientes. Redução de 28% no CAC através de otimização contínua. O time passou a reagir em até 4 horas a campanhas underperforming vs 3 dias anteriormente. Economia de R$ 500k em investimentos ineficientes no primeiro semestre."
    }
  },
  {
    id: "operations-dashboard",
    title: "Operations Dashboard",
    subtitle: "Eficiência Operacional e KPIs",
    objective: "Monitorar indicadores operacionais em tempo real para garantir eficiência, qualidade e cumprimento de SLAs.",
    technologies: ["Power BI", "Excel", "DAX", "SharePoint"],
    kpis: ["Eficiência Operacional", "Taxa de Qualidade", "SLA", "Produtividade", "Gargalos"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "/dashboard-ops-1.jpg",
    ],
    caseStudy: {
      problem: "A operação não tinha visibilidade em tempo real de gargalos e métricas críticas. Relatórios eram gerados no final do dia, impedindo ações corretivas imediatas. A qualidade era medida apenas ao final do processo, resultando em retrabalho custoso. O SLA com clientes estava sendo cumprido apenas em 78% dos casos.",
      data: "Dados extraídos do sistema de gestão de tarefas, controle de qualidade, sistema de tickets e planilhas de produtividade da equipe. Aproximadamente 10k registros diários. O desafio foi criar um modelo que permitisse análise em tempo real sem impactar a performance dos sistemas operacionais.",
      solution: "Dashboard operacional com atualização em tempo real mostrando filas, tempos de processamento e gargalos. Implementei controle estatístico de processo (SPC) para monitoramento de qualidade. Criei visão individual por colaborador para gestão de performance. Desenvolvi sistema de alertas para SLAs em risco.",
      impact: "Aumento do cumprimento de SLA de 78% para 95%. Redução de 40% no tempo médio de processamento após identificação e eliminação de gargalos. Diminuição de 60% no retrabalho através de monitoramento proativo de qualidade. A equipe de operações passou a ter visibilidade instantânea e tomada de decisão ágil."
    }
  }
];

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}
