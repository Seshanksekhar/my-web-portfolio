import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'DATA PRO',
    role: 'AWS Cloud Intern',
    period: 'Jan 2025 – Mar 2025',
    description: [
      'Configured and managed core AWS services including EC2, RDS, and S3 for application hosting.',
      'Established connectivity between application layers and backend infrastructure.',
      'Optimized application availability through load balancing and traffic distribution strategies.',
      'Participated in infrastructure monitoring and performance analysis to ensure system health.'
    ],
    isLatest: true
  },
  {
    company: 'ULEARN',
    role: 'AI/ML Color Blindness Detection Tool',
    period: 'Mar 2024',
    description: [
      'Engineered an accessibility-focused tool to detect color vision deficiency and assist users.',
      'Translated a real-life accessibility challenge into a working technical solution.',
      'Demonstrated capability to independently own a complete project lifecycle with emphasis on usability.'
    ],
    isLatest: false
  }
];

const education = [
  {
    institution: 'Aditya Degree College',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2022 – 2025',
    details: 'Affiliated to Andhra University | Aggregate: 81%'
  },
  {
    institution: 'S.M.T Godavari Devi Saraf High School',
    degree: 'Intermediate – MPC',
    period: '2020 – 2022',
    details: 'Science & Mathematics Focus'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Trajectory</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Education & <span className="text-gradient uppercase">Experience.</span></h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Building a strong foundation in cloud infrastructure and software development.
            </p>
            
            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass glass-hover"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="text-lg font-bold text-white">{item.institution}</h4>
                    <span className="text-xs font-bold text-slate-500 whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-brand-primary text-sm font-medium mb-1">{item.degree}</p>
                  <p className="text-slate-500 text-xs">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 border-l border-white/5 hidden lg:block" />

          <div className="lg:col-span-6 space-y-12">
             {experiences.map((exp, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative pl-8 border-l border-white/10"
               >
                 <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_#6366f1]" />
                 
                 <div className="mb-8">
                   <div className="flex items-center gap-3 text-brand-primary mb-3">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{exp.period}</span>
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                   <div className="text-brand-primary text-sm font-medium mb-6">
                      {exp.company}
                   </div>
                   <div className="space-y-4">
                     {exp.description.map((point, j) => (
                       <p key={j} className="text-slate-400 text-sm leading-relaxed">
                         {point}
                       </p>
                     ))}
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
