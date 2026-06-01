"use client"

import React, { useState, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

// used for selecting the current page
export const PageRoutes = {
  hero: 'Hero',
  log: 'Log',
  about: 'About',
  details: 'Details'
} as const;

export type PageRoutesType = typeof PageRoutes[keyof typeof PageRoutes];

export type PageProviderContextType = {
  pageRouteSelected: PageRoutesType,
  setPageRouteSelected: (route: PageRoutesType) => void
}

const PageProviderContext = createContext<PageProviderContextType | null>(null);


// COMPONENT
export default function PageProvider({ children }: { children: React.ReactNode }) {
  const [pageRouteSelected, setPageRouteSelected] = useState<PageRoutesType>(PageRoutes.hero);
  const router = useRouter();

  const updatePageRouteSelected = (route: PageRoutesType) => {
    setPageRouteSelected(route);
    router.replace('/' + route.toLowerCase());
  }

  return (
    <PageProviderContext.Provider value={{ pageRouteSelected, setPageRouteSelected: updatePageRouteSelected }}>
      {children}
    </PageProviderContext.Provider>
  )
}


// USAGE
export const usePageProviderContext = () => {

  const context = useContext(PageProviderContext);

  if (!context) {
    throw new Error("Context not found.");
  }

  return context;
}
