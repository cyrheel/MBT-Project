import { createContext, useState } from 'react';

interface ICookieContext {
  cookie: string;
  setCookie: (cookie: string) => void;
}

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
