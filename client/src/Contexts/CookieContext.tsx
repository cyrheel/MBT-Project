/* eslint-disable */
import { createContext, useState } from 'react';

interface ICookieContext {
  cookie: string;
  setCookie: (cookie: string) => void;
}
// Mdr bien vu
export const CookieContext = createContext<ICookieContext>({
  cookie: '',
  setCookie: () => {},
});

export default function CookieContextProvider({ children }: any) {
  const [cookie, setCookie] = useState('');

  return (
    <CookieContext.Provider value={{ cookie, setCookie }}>
      {children}
    </CookieContext.Provider>
  );
}
