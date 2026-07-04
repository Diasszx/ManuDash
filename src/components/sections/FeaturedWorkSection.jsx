import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Identidade Visual Aurora",
    category: "Branding",
    year: "2024",
    image: "/project-1.jpg",
  },
  {
    id: 2,
    title: "Editorial Revista M",
    category: "Editorial",
    year: "2024",
    image: "/project-2.jpg",
  },
  {
    id: 3,
    title: "Social Media Luxe",
    category: "Social Media",
    year: "2023",
    image: "/project-3.jpg",
  },
  {
    id: 4,
    title: "Rebranding Terra",
    category: "Branding",
    year: "2023",
    image: "/project-4.jpg",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-card flex items-center justify-center">
          <span className="text-text-muted text-sm">{project.title}</span>
        </div>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-text-primary font-medium text-lg mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm">{project.category}</p>
        </div>
        <span className="text-text-muted text-sm">{project.year}</span>
      </div>
    </motion.article>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-8 lg:px-12">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle className="mb-12 md:mb-16">Trabalhos em Destaque</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
