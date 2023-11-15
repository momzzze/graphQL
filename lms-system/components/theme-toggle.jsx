import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-2 py-2 rounded-full transition-colors duration-200 hover:bg-slate-400`}
    >
      {darkMode ? (
        <>
          <Sun width={19} height={19} color='white'/>
        </>
      ) : (
        <>
          <Moon width={19} height={19} color='black'/>
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
