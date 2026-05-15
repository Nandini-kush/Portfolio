import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Brain, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Intelligent platforms and scalable backend solutions built with modern technology stacks.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col bg-card/50 glass shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="secondary" className="glass gap-1.5 backdrop-blur-xl bg-background/50 border-white/20">
                    {project.category.includes("AI") ? <Brain size={14} /> : <Database size={14} />}
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors text-foreground">{project.title}</CardTitle>
                  <p className="text-sm font-semibold text-primary/80 uppercase tracking-wider">{project.subtitle}</p>
                </div>
                <CardDescription className="text-md mt-4 text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold mb-3 flex items-center gap-2 text-foreground">
                      <CheckCircle2 size={16} className="text-primary" />
                      Key Features:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="mt-1 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] bg-accent/30 border-border/50 text-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-4 pt-0">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2 border-primary/20 text-foreground hover:bg-primary/10">
                    <Github size={16} />
                    GitHub
                  </Button>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
