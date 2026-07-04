import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/tosue.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-24 md:py-32">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Analyst Name */}
          <motion.h1
            className="font-heading text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-text-primary mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Emanuelly Dias
            <br />
            <motion.span
              className="text-primary inline-block text-[clamp(1.5rem,4vw,3rem)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Business Intelligence Analyst
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Transformando dados de negócio em decisões estratégicas através de 
            dashboards e analytics. Especialista em Power BI, análise de dados 
            e visualização executiva.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button className="group">
              Ver Dashboards
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-border" />
        </motion.div>
      </motion.div>
    </section>
  );
}
