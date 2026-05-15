import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Code, Brain, Trophy, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const About: React.FC = () => {
  const { about, stats, education } = portfolioData;

  const statIcons = [
    <Briefcase className="w-5 h-5" />,
    <Code className="w-5 h-5" />,
    <Trophy className="w-5 h-5" />,
  ];

  return (
    <Section id="about" title="About Me" subtitle="Final year IT student focused on scalable backend architectures and AI solutions.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gradient">Who I Am</h3>
          <div className="text-muted-foreground leading-relaxed space-y-4 whitespace-pre-line text-lg">
            {about}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => (
              <Card key={i} className="border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 glass shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary mb-3">
                    {statIcons[i] || <Brain className="w-5 h-5" />}
                  </div>
                  <div className="font-bold text-xl text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <Card className="p-8 border-primary/20 bg-primary/5 glass relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-4 relative z-10">
              <div>
                <h4 className="font-bold text-lg text-foreground">{education.school}</h4>
                <p className="text-sm font-medium text-primary">{education.degree}</p>
                <p className="text-sm text-muted-foreground">{education.graduationDate} • CGPA: {education.cgpa}</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-2 text-foreground">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map(course => (
                    <span key={course} className="text-xs px-2 py-1 bg-accent/50 text-accent-foreground rounded-md border border-border">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-purple-500/20 bg-purple-500/5 glass relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
              <MapPin className="text-purple-500" />
              Leadership
            </h3>
            <div className="space-y-4 relative z-10">
              <div>
                <h4 className="font-bold text-md text-foreground">{portfolioData.leadership.role}</h4>
                <ul className="mt-2 space-y-2">
                  {portfolioData.leadership.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
