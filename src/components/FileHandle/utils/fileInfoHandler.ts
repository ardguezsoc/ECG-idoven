import { FileInfo } from '../../../contexts/History/HistoryContext';

export const fileInfoHandler = (file: File): FileInfo => {
  const { name = '-.-', size = 0, type = '-' } = file;
  const extensionPosition = name.lastIndexOf('.');
  const gbSize = (size / 10 ** 9).toFixed(2);
  const date = new Date().toLocaleDateString();

  const info: FileInfo = {
    name: name.substring(0, extensionPosition),
    size: gbSize,
    type,
    extension: name.substring(extensionPosition + 1),
    date,
  };
  return info;
};
