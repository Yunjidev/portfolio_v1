import React, { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(prevMode => !prevMode);
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

