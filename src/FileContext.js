import { createContext, useState } from "react";

export const FileContext = createContext(null);

export const FileContextProvider = ({ children }) => {
    const [file, setFile] = useState(null); // or whatever initial state
  
    return (
      <FileContext.Provider value={{ file, setFile }}>
        {children}
      </FileContext.Provider>
    );
  };