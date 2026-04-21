import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                  Let's <br/>
                  <span className="text-gradient">Talk.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-sm">
                  Available for entry-level opportunities in Web Development and App development using LLMs.
                </p>

                <div className="space-y-6">
                  <a href="mailto:seshanksekharbobbili@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                    <div className="p-3 rounded-2xl glass group-hover:bg-brand-primary/10 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</p>
                      <p className="text-lg font-medium">seshanksekharbobbili@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-12 flex-wrap">
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white cursor-pointer transition-colors">Twitter</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white cursor-pointer transition-colors">Github</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white cursor-pointer transition-colors">Linkedin</span>
              </div>
            </div>

            <div className="p-12 lg:p-16 bg-black/40">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none" />
                </div>
                <button className="w-full px-8 py-5 bg-brand-primary text-white font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">© 2026 Seshank Sekhar Bobbili. Built with React & AI.</p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center gap-1 group">Privacy Policy <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center gap-1 group">Terms of Service <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
