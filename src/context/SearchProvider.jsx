import { createContext, useState } from 'react';


// Crea il context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);
  const [cercaMovie, setCercaMovie] = useState("");

  return (
    <SearchContext.Provider value={{ movie, setMovie, serie, setSerie, cercaMovie, setCercaMovie }}>
      {children}
    </SearchContext.Provider>
  )
}