import React from 'react';

const Navbar = ({ currentPage, onNavigate }) => {
  const navItems = ['home', 'projects', 'blog', 'contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: 'max-content',
      padding: '0.5rem 1.5rem',
    }} className="glass">
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0,
      }}>
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => onNavigate(item)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === item ? 'var(--text-primary)' : 'var(--text-muted)',
                fontFamily: 'var(--font-space)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textTransform: 'capitalize',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0',
                position: 'relative'
              }}
            >
              {item}
              {currentPage === item && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-blue))',
                  borderRadius: '2px'
                }} />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
