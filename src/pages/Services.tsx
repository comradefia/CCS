import { motion } from "motion/react";
import { Code2, Cpu, Globe, Layout, Search, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Scalable, secure, and lightning-fast web apps built with React, Next.js, and modern cloud infrastructure.",
    tags: ["React", "TypeScript", "Node.js", "AWS"]
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    desc: "Integrating intelligent features like natural language processing, predictive analytics, and automated workflows.",
    tags: ["Gemini API", "OpenAI", "PyTorch", "Data Science"]
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "User-centric design that prioritizes accessibility, conversion, and brand identity through rigorous testing.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile experiences that feel at home on any device.",
    tags: ["React Native", "iOS", "Android", "Flutter"]
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    desc: "Technical SEO audits and performance tuning to ensure your site ranks high and loads fast.",
    tags: ["Core Web Vitals", "Analytics", "Content Strategy"]
  },
  {
    icon: Code2,
    title: "Legacy Modernization",
    desc: "Refactoring and migrating outdated systems to modern architectures without downtime.",
    tags: ["Refactoring", "Cloud Migration", "API Design"]
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-4 block">Services</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Capabilities that drive growth.
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            We offer a comprehensive suite of digital services designed to solve complex business challenges through technology.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="p-8 border border-zinc-200 rounded-3xl hover:border-zinc-900 transition-all group flex flex-col h-full"
          >
            <div className="bg-zinc-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-zinc-600 mb-8 flex-grow">{service.desc}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, j) => (
                <span key={j} className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 border border-zinc-200 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
