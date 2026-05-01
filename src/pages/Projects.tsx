import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, RefreshCw } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/pratikshmalik05/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Launched Missions</h2>
          <p className="text-muted">Dynamic projects pulled straight from the GitHub constellation.</p>
        </div>
        
        {/* n8n Status Badge */}
        <div style={{
          padding: '0.5rem 1rem',
          borderRadius: '100px',
          background: 'rgba(52, 211, 153, 0.1)',
          border: '1px solid rgba(52, 211, 153, 0.2)',
          color: '#34d399',
          fontSize: '0.8rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399' }} />
          n8n Sync: Active
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
          <RefreshCw className="spin" style={{ color: 'var(--accent-purple)' }} />
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="glass" 
              style={{ 
                padding: '1.5rem', 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 58, 237, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <Github size={20} className="text-muted" />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer"><ExternalLink size={18} className="text-muted" /></a>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{repo.name}</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                {repo.description || "A top-secret mission currently under development in the deep space lab."}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 500 }}>
                  {repo.language || "TypeScript"}
                </span>
                <span style={{ fontSize: '0.8rem' }} className="text-muted">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
