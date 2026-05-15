import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" subtitle="My professional journey through internships and industry exposure.">
      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none bg-accent/20 hover:bg-accent/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                    <p className="text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center gap-2">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {portfolioData.personalInfo.location}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.contributions.map((contribution, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
