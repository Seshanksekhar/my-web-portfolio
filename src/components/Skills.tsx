import { motion } from 'motion/react';
import { Cloud, Cpu, Database, Layout, Terminal, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Tech',
    icon: <Layout className="text-blue-500" />,
    skills: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'AI LLMs',
    icon: <Bot className="text-amber-500" />,
    skills: ['ChatGPT', 'Gemini', 'NotebookLM', 'Google AI Studio']
  },
  {
    title: 'AI & Prompt Engineering',
    icon: <Bot className="text-amber-400" />,
    skills: ['Prompt Design', 'Prompt Optimization', 'LLM Integration', 'Zero-shot Prompting']
  },
  {
    title: 'Data & OS',
    icon: <Database className="text-emerald-500" />,
    skills: ['SQL', 'Oracle', 'Linux OS', 'Windows Server', 'Networking']
  },
  {
    title: 'Tools & Productivity',
    icon: <Terminal className="text-purple-500" />,
    skills: ['GitHub', 'VS Code', 'MS Office']
  },
  {
    title: 'IT Fundamentals',
    icon: <Cpu className="text-rose-500" />,
    skills: ['SDLC', 'Performance Monitoring', 'Hardware Troubleshooting', 'Connectivity Diagnostics']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Technical Stack</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Expertise & Capabilities</h3>
          <p className="text-zinc-500 max-w-xl mx-auto">A comprehensive overview of my technical toolkit, from building responsive interfaces to architecting scalable cloud solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass-dark border border-white/5 hover:border-brand-primary/20 transition-all duration-500 bg-black/40 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 group-hover:scale-110 transition-transform duration-500 border border-indigo-500/20">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-primary transition-colors">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[150px] -z-10" />
    </section>
  );
}
