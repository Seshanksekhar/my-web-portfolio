import { motion } from 'motion/react';
import { ExternalLink, Github, Monitor, Smartphone, Palette, UserCircle } from 'lucide-react';

const projects = [
  {
    title: 'Super Snap Photography',
    category: 'Mobile First Portfolio',
    description: 'Interactive photography portfolio with a JS-powered lightbox, showcasing mobile photography across multiple genres.',
    image: 'https://picsum.photos/seed/photography/800/600',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    icon: <Smartphone size={20} />,
    link: 'https://seshanksekhar.github.io/SUPER-SNAP7/',
    github: '#'
  },
  {
    title: 'Virat Kohli Birthday Tribute',
    category: 'Story-driven Web',
    description: 'A narrative-driven tribute webpage combining storytelling, biography sections, and a curated gallery without external frameworks.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Typography', 'Magazine Style', 'Interactions'],
    icon: <UserCircle size={20} />,
    link: 'https://seshanksekhar.github.io/Happy-Birthday-KING-/',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Web & AI Projects</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">Hands-on <span className="text-gradient uppercase">Developments.</span></h3>
          </div>
          <a href="https://github.com/seshanksekhar" className="group flex items-center gap-3 px-6 py-3 glass glass-hover">
             <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-widest transition-colors">View All Work →</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass glass-hover p-6 flex flex-col gap-6"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950 to-slate-900 border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[9px] font-bold text-white tracking-[0.1em] border border-white/10">
                  LIVE PREVIEW
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white tracking-tight">{project.title}</h4>
                    <div className="flex gap-2">
                       <a href={project.github} className="text-slate-500 hover:text-white transition-colors"><Github size={16} /></a>
                       <a href={project.link} className="text-brand-primary hover:brightness-125 transition-all"><ExternalLink size={16} /></a>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[9px] font-bold uppercase tracking-widest text-slate-500 px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-primary/30 transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
