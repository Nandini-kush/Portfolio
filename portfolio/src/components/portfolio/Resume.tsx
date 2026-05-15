import React from 'react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, FileText, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Resume: React.FC = () => {
  const { personalInfo, education } = portfolioData;

  return (
    <Section id="resume" title="Resume" subtitle="Ready to contribute to impactful products and grow as an engineer.">
      <div className="max-w-4xl mx-auto">
        <Card className="border-border/50 bg-card/50 glass overflow-hidden relative group shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/20 transition-colors duration-500" />
          <CardContent className="p-12 relative z-10 text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
              <FileText size={40} />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-foreground">Interested in working together?</h3>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Download my resume to explore my experience, projects, and technical skills in Software Engineering, Backend Development, and AI/ML. I am currently a Final year B.Tech IT student seeking internship opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={personalInfo.resumeUrl} 
                download="Nandini-Kushwah-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-8 gap-3 text-lg font-bold shadow-xl shadow-primary/20 w-full sm:w-auto">
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
              <div className="flex gap-4 justify-center">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-14 px-6 gap-3 text-lg font-bold border-primary/20 text-foreground hover:bg-primary/10">
                    <Linkedin size={20} />
                  </Button>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-14 px-6 gap-3 text-lg font-bold border-primary/20 text-foreground hover:bg-primary/10">
                    <Github size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/30 border-border/50 glass shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Education</p>
                <p className="font-bold text-lg text-foreground">{education.school}</p>
                <p className="text-sm text-muted-foreground">{education.degree} • {education.cgpa} CGPA</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/30 border-border/50 glass shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Expected Graduation</p>
                <p className="font-bold text-lg text-foreground">{education.graduationDate}</p>
                <p className="text-sm text-muted-foreground">Final Year B.Tech IT</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
