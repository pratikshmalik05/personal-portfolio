import React, { useState, useEffect } from 'react';
import { Rocket, Send } from 'lucide-react';

const Home = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Full Stack Developer", "AI Automation Builder", "Solution Architect", "Deep Space Enthusiast"];
  const speed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const skills = ["React", "TypeScript", "n8n", "Node.js", "Python", "Claude API", "Docker"];

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      {/* Avatar Section with Orbits */}
      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
        <div className="orbit-ring glow-purple" style={{ width: '100%', height: '100%', '--duration': '20s' } as React.CSSProperties} />
        <div className="orbit-ring glow-blue" style={{ width: '80%', height: '80%', '--duration': '15s', animationDirection: 'reverse' } as React.CSSProperties} />
        <div className="floating" style={{ 
          width: '180px', 
          height: '180px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          boxShadow: '0 0 50px rgba(124, 58, 237, 0.4)',
          zIndex: 2
        }}>
          👨‍🚀
        </div>
      </div>

      <h1 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '1rem 0' }}>
        Pratiksh Malik
      </h1>
      
      <div style={{ fontSize: '1.5rem', fontWeight: 500, height: '2rem', marginBottom: '1.5rem' }}>
        I'm a <span className="gradient-text">{text}</span>
        <span className="cursor" />
      </div>

      <p className="text-muted" style={{ maxWidth: '600px', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Building autonomous systems and sleek user interfaces. Bridging the gap between human creativity and AI-powered automation.
      </p>

      {/* Skill Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginBottom: '3rem', maxWidth: '600px' }}>
        {skills.map(skill => (
          <span key={skill} style={{ 
            padding: '0.4rem 1.2rem', 
            borderRadius: '100px', 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid var(--glass-border)',
            fontSize: '0.9rem',
            color: 'var(--text-primary)'
          }}>
            {skill}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <button 
          onClick={() => onNavigate('projects')}
          style={{
            padding: '1rem 2rem',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-blue))',
            color: 'white',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Rocket size={18} /> View Projects
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          style={{
            padding: '1rem 2rem',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.05)',
            color: 'white',
            border: '1px solid var(--glass-border)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <Send size={18} /> Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Home;
