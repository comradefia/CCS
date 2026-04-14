import { motion } from "motion/react";
import { ArrowRight, Code2, Cpu, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              CREATIVE <br />
              <span className="text-zinc-500">CODING</span> <br />
              SOLUTIONS
            </h1>
            <p className="text-xl text-zinc-600 max-w-md mb-8">
              We build high-performance digital experiences that combine technical precision with creative vision.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200"
          >
            <img 
              src="https://picsum.photos/seed/tech/1200/1200" 
              alt="Tech Abstract" 
              className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-zinc-200 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-zinc-300 rounded-full blur-3xl opacity-30 -z-10" />
      </section>

      {/* Features/Services Preview */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Web Development", desc: "Bespoke web applications built with modern frameworks." },
            { icon: Cpu, title: "AI Integration", desc: "Leveraging LLMs and machine learning to power your business." },
            { icon: Zap, title: "Performance", desc: "Optimized for speed, accessibility, and search engines." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-colors group"
            >
              <item.icon className="h-10 w-10 mb-6 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-zinc-900 text-white py-32 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
              We believe that code is a creative medium. We don't just build software; we craft digital legacies.
            </h2>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-zinc-900 rounded-full px-8" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-zinc-800/50 skew-x-12 translate-x-1/4 -z-0" />
      </section>
    </div>
  );
}
