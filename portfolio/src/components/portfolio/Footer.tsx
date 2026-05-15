import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;
  
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-border mt-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-3">
          <p className="text-2xl font-bold text-gradient">{personalInfo.name}</p>
          <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
            {personalInfo.role}
          </p>
          <div className="flex gap-4 mt-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <p className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
            Designed & Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by {personalInfo.name}
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © {currentYear} • SGSITS Indore • {personalInfo.location}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-bold mt-2">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mb-32 -mr-32" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] -mt-32 -ml-32" />
    </footer>
  );
};

export default Footer;
