import React, { createContext, useContext, useState, useEffect } from 'react';

const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  // Utilisez le localStorage pour obtenir la valeur initiale ou par défaut à false
  const initialNightMode = JSON.parse(localStorage.getItem('nightMode')) || false;

  const [isNightMode, setNightMode] = useState(initialNightMode);

  useEffect(() => {
    // Enregistrez l'état actuel du mode nuit dans le localStorage
    localStorage.setItem('nightMode', JSON.stringify(isNightMode));
  }, [isNightMode]);

  const toggleNightMode = () => {
    setNightMode((prevMode) => !prevMode);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export const useNightMode = () => {
  return useContext(NightModeContext);
};
