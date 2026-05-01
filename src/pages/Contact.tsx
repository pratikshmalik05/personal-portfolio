import React, { useState } from 'react';
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Replace with your actual n8n webhook URL
    const N8N_WEBHOOK_URL =  "/api/contact";

    try {
      
      
     await fetch(N8N_WEBHOOK_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formState),
});
        
      
      // Simulating success for demo
      await new Promise(r => setTimeout(r, 1500));
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Establish Connection</h2>
        <p className="text-muted">Send a signal through the void. I'll receive it at the base station.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        {/* Contact Form */}
        <div className="glass" style={{ padding: '2rem' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <CheckCircle size={48} style={{ color: '#34d399', marginBottom: '1rem' }} />
              <h3>Signal Received!</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem' }}>Your message has been beamed to the home planet.</p>
              <button 
                onClick={() => setStatus('idle')}
                style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', cursor: 'pointer' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.8rem', color: 'white', fontFamily: 'inherit' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.8rem', color: 'white', fontFamily: 'inherit' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.8rem', color: 'white', fontFamily: 'inherit', resize: 'none' }}
                />
              </div>
              
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontSize: '0.85rem' }}>
                  <AlertCircle size={16} /> Transmission failed. Try again?
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-blue))',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: status === 'loading' ? 0.7 : 1
                }}
              >
                {status === 'loading' ? "Beaming..." : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          )}
        </div>

        {/* Info & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequency Check</h3>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>
            I'm always open to new missions, collaborations, or just a chat about the future of tech. Reach out through any of these bands.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
              <Mail size={20} style={{ color: 'var(--accent-purple)' }} /> pratikshmalik@gmail.com
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
            <a href="https://github.com/pratikshmalik05" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pratiksh-malik-91984b367/" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/PratikshM60725" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
