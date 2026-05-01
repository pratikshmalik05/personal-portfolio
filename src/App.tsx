import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Starfield from './components/Starfield';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'projects': return <Projects />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Starfield />
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container">
        {renderPage()}
      </main>
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        color: 'var(--text-muted)', 
        fontSize: '0.8rem',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem'
      }}>
        Built with React · Automated with n8n · AI-powered by Claude · Deployed on Vercel
      </footer>
    </div>
  );
}

export default App;
