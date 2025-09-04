// resources/js/components/ui/tabs.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextProps {
  activeValue: string;
  setActiveValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultValue, className }) => {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used inside Tabs');

  const { activeValue, setActiveValue } = context;
  const isActive = activeValue === value;

  return (
    <button
      className={`${className} ${isActive ? 'border-b-2 border-black' : ''}`}
      onClick={() => setActiveValue(value)}
      data-state={isActive ? 'active' : 'inactive'}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used inside Tabs');

  const { activeValue } = context;
  return activeValue === value ? <div>{children}</div> : null;
};
