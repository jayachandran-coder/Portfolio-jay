// src/App.jsx
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import DashboardCard from './components/DashboardCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      {/* Navbar sits outside sections, always on top */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DashboardCard />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
