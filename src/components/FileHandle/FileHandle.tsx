import React from 'react';
import { useHistory } from '../../hooks';
import { fileInfoHandler } from './utils/fileInfoHandler';

interface FileHandleProps {
  onChange: (file: File) => void;
}

export const FileHandle: React.FC<FileHandleProps> = ({ onChange }) => {
  const { setHistoryOfFiles } = useHistory();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event?.target?.files?.[0];
    if (file) {
      setHistoryOfFiles(fileInfoHandler(file));
      onChange(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};
