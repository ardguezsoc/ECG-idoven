import React from 'react';

export interface FileInfo {
  name: string;
  size: string;
  date: string;
  type: string;
  extension?: string;
  [key: string]: string | undefined;
}

type HistoryContextValue = {
  history: FileInfo[];
  setHistoryOfFiles: (history: FileInfo) => void;
};

interface HistoryProviderProps {
  children: React.ReactNode;
}

export const HistoryContext: React.Context<HistoryContextValue> = React.createContext<HistoryContextValue>(
  {} as HistoryContextValue
);

export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = React.useState<FileInfo[]>([]);

  const setHistoryOfFiles = (history: FileInfo) => setHistory((prev) => [...prev, history]);

  return <HistoryContext.Provider value={{ history, setHistoryOfFiles }}>{children}</HistoryContext.Provider>;
};
