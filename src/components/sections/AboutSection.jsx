import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const skills = [
  "Power BI Intermediário",
  "Excel Avançado",
  "DAX",
  "Data Analysis",
  "Data Visualization",
  "ETL",
];

const tools = [
  { name: "Power BI", level: "Intermediário" },
  { name: "Excel", level: "Avançado" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle className="mb-6">Sobre</SectionTitle>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  Sou Analista de Business Intelligence com experiência na
                  transformação de dados em informações estratégicas para apoiar
                  a tomada de decisões. Ao longo da minha trajetória, desenvolvi
                  expertise na criação de dashboards interativos, modelagem de
                  dados e desenvolvimento de indicadores de desempenho, sempre
                  buscando tornar informações complexas mais claras, acessíveis
                  e relevantes para o negócio.
                </p>
                <p>
                  Especialista em Power BI, Excel e análise de dados, combino
                  habilidades técnicas com visão de negócio para entregar
                  soluções que geram valor e resultados. Acredito que os dados
                  têm o poder de contar histórias e revelar oportunidades, e meu
                  objetivo é transformar essas informações em insights que
                  impulsionem o crescimento e a eficiência das organizações.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-text-primary font-medium mb-4">
                  Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm text-text-secondary border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Experience & Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Tools Proficiency */}
              <div className="mb-10">
                <h3 className="font-heading text-2xl text-text-primary mb-6">
                  Domínio de Ferramentas
                </h3>
                <div className="space-y-4">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-text-primary">{tool.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-text-secondary text-sm">
                          {tool.level}
                        </span>
                        <div className="w-24 h-2 bg-card rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-primary rounded-full ${
                              tool.level === "Avançado" ? "w-full" : "w-2/3"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
