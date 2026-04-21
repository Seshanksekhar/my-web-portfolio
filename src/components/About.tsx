import { motion } from 'motion/react';
import { User, GraduationCap, MapPin, Code2 } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <GraduationCap size={20} />, label: 'BCA (2025)', value: '81% Aggregate' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Visakhapatnam, IN' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Professional Summary</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Solving problems through <br/>
                <span className="text-gradient">code and AI.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Results-driven BCA graduate with hands-on experience in web technologies and AI/ML project development. 
                Proficient in modern web fundamentals and AI prompt engineering, with foundational expertise in automation tools.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 glass glass-hover">
                  <div className="flex items-center gap-3 text-brand-primary mb-2">
                    {stat.icon}
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                  </div>
                  <div className="text-xl font-bold text-white tracking-tight">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
               <div className="w-full h-full rounded-2xl bg-zinc-900 overflow-hidden relative group">
                  <img 
                    src="https://picsum.photos/seed/seshank/800/800" 
                    alt="Seshank Sekhar" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
               </div>
            </div>
            
            {/* Absolute Badges */}
            <div className="absolute -top-6 -right-6 p-6 glass rounded-2xl border-white/10 backdrop-blur-2xl shadow-2xl animate-bounce [animation-duration:3s]">
              <div className="text-brand-primary flex flex-col items-center">
                 <span className="text-xs font-bold uppercase">GPA</span>
                 <span className="text-3xl font-display font-bold">8.1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
