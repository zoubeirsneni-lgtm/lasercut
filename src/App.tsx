/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  Zap, 
  Layers, 
  Box, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu, 
  X,
  Cpu,
  PenTool
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Material {
  name: string;
  image: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Matériaux', href: '#materials' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-laser rounded-sm flex items-center justify-center rotate-45">
            <Zap className="text-black -rotate-45 w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">LaserCraft<span className="text-laser">.tn</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-laser transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 bg-laser text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Devis Gratuit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-laser transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-3 bg-laser text-black font-bold uppercase tracking-widest mt-2">
              Devis Gratuit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-laser/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-laser/10 border border-laser/20 text-laser text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-laser opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-laser"></span>
            </span>
            Atelier de Précision à Tunis
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase tracking-tighter mb-8">
            L'ART DU <br />
            <span className="text-laser laser-text-glow">LASER</span>
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-10 leading-relaxed">
            Spécialistes de la découpe et gravure laser haute performance. Nous donnons vie à vos projets les plus complexes sur bois, acrylique, cuir et métal.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-laser text-black font-extrabold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group">
              Nos Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-extrabold uppercase tracking-widest hover:bg-white/5 transition-all">
              Portfolio
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=1000&auto=format&fit=crop" 
              alt="Laser Cutting Machine" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                <div className="text-laser font-mono text-xl font-bold">0.01mm</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Précision</div>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                <div className="text-laser font-mono text-xl font-bold">24/7</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Production</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Laser Beam */}
          <div className="absolute -top-10 -right-10 w-px h-64 bg-gradient-to-b from-transparent via-laser to-transparent blur-[1px] rotate-45 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      id: '01',
      title: 'Découpe Laser',
      description: 'Découpe de haute précision pour bois, PMMA, cuir et textiles. Idéal pour maquettes, enseignes et packaging.',
      icon: <Scissors className="w-6 h-6" />
    },
    {
      id: '02',
      title: 'Gravure Laser',
      description: 'Marquage indélébile et détaillé sur une multitude de supports. Logos, textes et photos avec un rendu exceptionnel.',
      icon: <PenTool className="w-6 h-6" />
    },
    {
      id: '03',
      title: 'Projets Sur Mesure',
      description: 'Accompagnement de la conception à la réalisation. Bureau d\'études dédié pour vos besoins spécifiques.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: '04',
      title: 'Série & Prototype',
      description: 'Capacité de production flexible, de la pièce unique à la grande série industrielle.',
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="text-laser font-mono text-xs tracking-[0.3em] uppercase mb-4">Expertise Technique</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Nos Solutions</h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Nous utilisons les dernières technologies laser pour garantir une qualité irréprochable et des délais optimisés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((service) => (
            <div key={service.id} className="bg-[#080808] p-8 hover:bg-[#0c0c0c] transition-colors group">
              <div className="text-white/20 font-mono text-4xl mb-8 group-hover:text-laser transition-colors">{service.id}</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-laser group-hover:bg-laser group-hover:text-black transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Materials = () => {
  const materials: Material[] = [
    { name: 'Bois & MDF', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&auto=format&fit=crop' },
    { name: 'Acrylique (PMMA)', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop' },
    { name: 'Cuir & Textile', image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Métal (Marquage)', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop' },
    { name: 'Papier & Carton', image: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80&w=400&auto=format&fit=crop' },
    { name: 'Pierre & Verre', image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <section id="materials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Matériaux Travaillés</h2>
          <div className="w-20 h-1 bg-laser mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {materials.map((mat) => (
            <div key={mat.name} className="relative aspect-[3/4] group overflow-hidden rounded-xl border border-white/10">
              <img 
                src={mat.image} 
                alt={mat.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-laser">{mat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Réalisations</h2>
          <button className="text-laser font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors">
            Voir Tout <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative aspect-square bg-[#111] rounded-2xl overflow-hidden border border-white/5"
            >
              <img 
                src={`https://picsum.photos/seed/laser${i}/800/800`} 
                alt={`Project ${i}`} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h4 className="text-xl font-bold uppercase mb-2">Projet Industriel #{i}</h4>
                <p className="text-white/60 text-xs uppercase tracking-widest">Découpe Acrylique / Gravure</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-laser/5 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Contactez-nous</h2>
            <p className="text-white/50 mb-12 leading-relaxed">
              Vous avez un projet ? Une idée ? Notre équipe est prête à vous accompagner. Envoyez-nous vos fichiers (DXF, AI, PDF) pour un devis rapide.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-laser">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Téléphone</div>
                  <div className="text-lg font-bold">+216 71 000 000</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-laser">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-lg font-bold">contact@lasercraft.tn</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-laser">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Localisation</div>
                  <div className="text-lg font-bold">Z.I. La Soukra, Tunis, Tunisie</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Nom Complet</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-laser outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-laser outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Sujet</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-laser outline-none transition-colors appearance-none">
                  <option>Demande de Devis</option>
                  <option>Question Technique</option>
                  <option>Partenariat</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-laser outline-none transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-laser text-black font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-laser rounded-sm flex items-center justify-center rotate-45">
                <Zap className="text-black -rotate-45 w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase italic">LaserCraft<span className="text-laser">.tn</span></span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Votre partenaire de confiance pour tous vos besoins en découpe et gravure laser en Tunisie. Précision, rapidité et innovation au service de vos idées.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-laser hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-laser hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#services" className="hover:text-laser transition-colors">Services</a></li>
              <li><a href="#materials" className="hover:text-laser transition-colors">Matériaux</a></li>
              <li><a href="#portfolio" className="hover:text-laser transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-laser transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Horaires</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex justify-between"><span>Lun - Ven</span> <span>08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Samedi</span> <span>08:00 - 13:00</span></li>
              <li className="flex justify-between"><span>Dimanche</span> <span className="text-red-500/50">Fermé</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <div>© 2026 LaserCraft Tunisie. Tous droits réservés.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Materials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
