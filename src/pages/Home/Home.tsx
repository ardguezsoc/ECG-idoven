import { useState } from 'react';
import { Text } from '../../components/Text';
import { FileHandle } from '../../components/FileHandle/FileHandle';
import { useTranslation } from 'react-i18next';
import { sliceArrayBuffer } from '../../utils/arrayBufferUtils';
import { Chart } from '../../components/Chart';

export interface OffsetController {
  offset: number;
  offsetChunk: number;
}
export const Home = () => {
  const [arrayBuffer, setArrayBuffer] = useState(new ArrayBuffer(0));
  const [fileContent, setFileContent] = useState('');
  const [offsetController, setOffsetController] = useState<OffsetController>({ offset: -1, offsetChunk: 0 });

  const handleFileContent = async (file: File) => {
    const auxArrayBuffer = await file.arrayBuffer();
    setArrayBuffer(auxArrayBuffer);
    sliceArrayBuffer(1, offsetController, auxArrayBuffer, setOffsetController, setFileContent);
  };

  return (
    <div>{fileContent.length ? <Chart chartData={fileContent} /> : <FileHandle onChange={handleFileContent} />}</div>
  );
};
