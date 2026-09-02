import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AppRoute = 
  | '/'
  | '/website-development'
  | '/3d-web-design'
  | '/ai-solutions'
  | '/data-analytics'
  | '/landing-page-development';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, hash?: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

const VALID_ROUTES: AppRoute[] = [
  '/',
  '/website-development',
  '/3d-web-design',
  '/ai-solutions',
  '/data-analytics',
  '/landing-page-development',
];

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    return VALID_ROUTES.includes(path as AppRoute) ? path : '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      if (VALID_ROUTES.includes(path as AppRoute)) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
      
      if (window.location.hash) {
        const elem = document.querySelector(window.location.hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, hash?: string) => {
    const cleanPath = path.replace(/\/$/, '') || '/';
    const targetUrl = cleanPath + (hash ? (hash.startsWith('#') ? hash : `#${hash}`) : '');
    
    window.history.pushState(null, '', targetUrl);
    
    if (VALID_ROUTES.includes(cleanPath as AppRoute)) {
      setCurrentPath(cleanPath);
    } else {
      setCurrentPath('/');
    }

    if (hash) {
      setTimeout(() => {
        const hashId = hash.replace(/^#/, '');
        const elem = document.getElementById(hashId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  hash?: string;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, hash, children, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('https://wa.me')) {
      return;
    }
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to, hash);
  };

  const href = to + (hash ? (hash.startsWith('#') ? hash : `#${hash}`) : '');

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
