import { useState } from 'react';
import { Text } from '../../components/Text';
import { FileHandle } from '../../components/FileHandle/FileHandle';
import { useTranslation } from 'react-i18next';
import { sliceArrayBuffer } from '../../utils/arrayBufferUtils';

export interface OffsetController {
  offset: number;
  offsetChunk: number;
}
export const Home = () => {
  const { t } = useTranslation();
  const [arrayBuffer, setArrayBuffer] = useState(new ArrayBuffer(0));
  const [fileContent, setFileContent] = useState('');
  const [offsetController, setOffsetController] = useState<OffsetController>({ offset: -1, offsetChunk: 0 });

  const handleFileContent = async (file: File) => {
    const auxArrayBuffer = await file.arrayBuffer();
    setArrayBuffer(auxArrayBuffer);
    sliceArrayBuffer(1, offsetController, auxArrayBuffer, setOffsetController, setFileContent);
  };

  return (
    <div>
      <Text>{t('home')}</Text>
      <FileHandle onChange={handleFileContent} />
    </div>
  );
};
