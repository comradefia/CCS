import { motion } from "motion/react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-4 block">About CCS</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
            A collective of designers, engineers, and dreamers.
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-zinc-600 leading-relaxed mb-6">
              Founded in 2024, Creative Coding Solutions was born out of a desire to bridge the gap between complex engineering and elegant design. We saw a world where software was functional but often lacked soul.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Our mission is to empower businesses with tools that are not only powerful but also intuitive and beautiful. We treat every line of code as a brushstroke and every interface as a canvas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl overflow-hidden aspect-video bg-zinc-100 border border-zinc-200"
          >
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Our Workspace" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-12 border-b border-zinc-200 pb-4">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Precision", desc: "We obsess over the details, from the architecture of our databases to the micro-interactions of our buttons." },
              { title: "Innovation", desc: "We don't follow trends; we study them to understand where the future is heading." },
              { title: "Transparency", desc: "We believe in honest communication and clear processes. No jargon, just results." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-zinc-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
