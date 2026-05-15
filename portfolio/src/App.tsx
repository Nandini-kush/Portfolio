import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/portfolio/Navbar';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Experience from './components/portfolio/Experience';
import Resume from './components/portfolio/Resume';
import Contacts from './components/portfolio/Contacts';
import Footer from './components/portfolio/Footer';
import Background from './components/portfolio/Background';
import { portfolioData } from './data/portfolioData';

function App() {
  const { seo } = portfolioData;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <HelmetProvider>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="author" content={portfolioData.personalInfo.name} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
        </Helmet>
        
        <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
          <Background />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contacts />
          <Footer />
          <Toaster position="bottom-right" />
        </main>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
