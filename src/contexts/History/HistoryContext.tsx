import React from 'react';

type HistoryContextValue = {
  history: string[];
  setHistoryOfFiles: (history: string) => void;
};

interface HistoryProviderProps {
  children: React.ReactNode;
}

export const HistoryContext: React.Context<HistoryContextValue> = React.createContext<HistoryContextValue>(
  {} as HistoryContextValue
);

export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = React.useState<string[]>([]);

  const setHistoryOfFiles = (history: string) => setHistory((prev) => [...prev, history]);

  return <HistoryContext.Provider value={{ history, setHistoryOfFiles }}>{children}</HistoryContext.Provider>;
};
