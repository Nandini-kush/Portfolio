import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, Github, Linkedin, Phone, Loader2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Contacts: React.FC = () => {
  const { personalInfo } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: personalInfo.location, href: "#" },
  ];

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      toast.success('Message sent successfully! I will get back to you soon.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" title="Get in Touch" subtitle="Final year B.Tech IT student seeking Software Engineering, Backend, and AI/ML internship opportunities.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group block"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  <p className="font-bold group-hover:text-primary transition-colors text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="space-y-4 pt-8 border-t border-border">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Social Profiles</p>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all text-foreground">
                  <Github size={20} />
                </Button>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all text-foreground">
                  <Linkedin size={20} />
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button size="icon" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all text-foreground">
                  <Mail size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="glass border-border/50 bg-card/50 shadow-2xl overflow-hidden shadow-sm">
            <CardContent className="p-8">
              <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={sendEmail}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Your Name</label>
                  <input 
                    name="user_name"
                    type="text" 
                    placeholder="Nandini Kushwah" 
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email Address</label>
                  <input 
                    name="user_email"
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-foreground">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    placeholder="Internship Opportunity / Collaboration" 
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    placeholder="Hi Nandini, I'd like to discuss..." 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-foreground"
                    required
                  />
                </div>
                <div className="md:col-span-2 pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full gap-2 h-14 text-lg font-bold shadow-lg shadow-primary/20"
                  >
                    {isSending ? (
                      <>
                        Sending...
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
