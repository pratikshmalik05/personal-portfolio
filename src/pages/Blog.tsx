import React, { useState } from 'react';
import { Sparkles, Clock, Tag as TagIcon, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [topic, setTopic] = useState('');
  const [generatedPost, setGeneratedPost] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const staticPosts = [
    {
      id: 1,
      title: "Building the Anti-Gravity Interface",
      excerpt: "Exploring the nuances of CSS keyframe animations and glassmorphism in modern web design.",
      tags: ["Design", "CSS"],
      readTime: "5 min"
    },
    {
      id: 2,
      title: "The Future of n8n in Enterprise",
      excerpt: "How low-code automation is revolutionizing the way we handle complex backend workflows.",
      tags: ["Automation", "n8n"],
      readTime: "8 min"
    }
  ];

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    
    // In a real scenario, this would hit an n8n webhook which then calls Claude
    // to keep the API key secure. For this demo, we simulate the AI response.
    try {
      // Simulation delay
      await new Promise(r => setTimeout(r, 2000));
      
      const mockResponse = {
        title: `Deep Dive into ${topic}`,
        content: `As we explore the vast expanse of ${topic}, we find that automation and AI are the dual thrusters propelling us forward. In this AI-generated exploration, we look at how ${topic} impacts our daily development cycles and what the future holds for engineers in this space.`,
        tags: ["AI-Generated", topic],
        readTime: "3 min"
      };
      
      setGeneratedPost(mockResponse);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Deep Space Logs</h2>

      {/* AI Blog Generator */}
      <div className="glass" style={{ padding: '2rem', marginBottom: '4rem', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <Sparkles style={{ color: 'var(--accent-purple)' }} />
          <h3 style={{ fontSize: '1.2rem' }}>AI Thought Generator</h3>
        </div>
        <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Type a topic and let Claude (sonnet-3.5) generate a micro-blog post for you.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="e.g. The ethics of RAG, n8n vs Zapier..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              flex: 1,
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              padding: '0.8rem 1rem',
              color: 'white',
              fontFamily: 'inherit'
            }}
          />
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !topic}
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              background: 'var(--accent-purple)',
              color: 'white',
              border: 'none',
              fontWeight: 600,
              cursor: isGenerating ? 'not-allowed' : 'pointer',
              opacity: isGenerating ? 0.6 : 1
            }}
          >
            {isGenerating ? "Synthesizing..." : "Generate"}
          </button>
        </div>

        {generatedPost && (
          <div style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '3px solid var(--accent-purple)', background: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-purple)' }}>{generatedPost.title}</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>{generatedPost.content}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {generatedPost.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent-blue)' }}>#{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Static Posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {staticPosts.map(post => (
          <div key={post.id} className="glass" style={{ padding: '2rem', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.7rem', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '4px', 
                    background: 'rgba(37, 99, 235, 0.1)', 
                    color: 'var(--accent-blue)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }} className="text-muted">
                <Clock size={14} /> {post.readTime}
              </div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{post.excerpt}</p>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-primary)', 
              fontWeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.3rem', 
              cursor: 'pointer' 
            }}>
              Read Post <ChevronRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
