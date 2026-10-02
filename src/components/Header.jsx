import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  
  // Initialize state by looking checking localStorage or system settings
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Fallback to system preference if no saved choice
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  // Whenever the theme changes, update the DOM attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function passed to the button
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: 'var(--accent-color)',
          color: 'var(--bg-color)',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Switch to {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>
    </nav>
  );
}

export default Header;
