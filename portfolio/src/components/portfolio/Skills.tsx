import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: "Machine Learning & AI", items: skills.mlAndAi },
    { title: "Backend Development", items: skills.backend },
    { title: "Languages & Core CS", items: [...skills.languages, ...skills.coreCs] },
    { title: "Frontend & Databases", items: [...skills.frontend, ...skills.databases] },
    { title: "DevOps & Tools", items: [...skills.devops, ...skills.tools] },
  ];

  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Technologies and frameworks I use to build production-grade systems.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl border bg-card/30 glass group hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-2 py-0.5 text-xs bg-primary/5 hover:bg-primary/20 transition-all cursor-default border border-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 p-8 rounded-2xl border border-dashed border-primary/30 bg-primary/5 text-center">
        <h3 className="text-xl font-bold mb-4">Currently Mastering</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.learning.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
              className="px-4 py-2 rounded-full bg-accent/50 border border-border text-sm font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
