import React, { useState, useEffect } from 'react';
import '../App.css';
import NavbarComponent from '../components/NavbarComponent';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const ViewPage = () => {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let current = '#home';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = `#${id}`;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <NavbarComponent activeSection={activeSection} />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default ViewPage;