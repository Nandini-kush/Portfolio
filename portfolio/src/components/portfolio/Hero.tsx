import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Brain, Code, Database, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';
import profileImg from '@/assets/profile.jpg';

const Hero: React.FC = () => {
  const { hero, personalInfo, stats } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Final Year B.Tech IT Student @ SGSITS
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-6">
            {hero.headline}
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-accent/50 rounded-lg text-sm font-medium border border-border text-foreground">
              <Brain className="w-4 h-4 text-primary" />
              Machine Learning
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent/50 rounded-lg text-sm font-medium border border-border text-foreground">
              <Database className="w-4 h-4 text-primary" />
              Backend Systems
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent/50 rounded-lg text-sm font-medium border border-border text-foreground">
              <Code className="w-4 h-4 text-primary" />
              Full Stack
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            {hero.intro}
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={personalInfo.resumeUrl} 
              download="Nandini-Kushwah-Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 group shadow-lg shadow-primary/20">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="gap-2 border-primary/20 text-foreground hover:bg-primary/10">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="ghost" className="gap-2 text-foreground hover:bg-accent">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-card">
              <img 
                src={profileImg} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </div>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
