/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from '../../hooks';
import { fileInfoHandler } from './utils/fileInfoHandler';
import { sliceArrayBuffer } from '../../utils/arrayBufferUtils';

export const FileHandle: React.FC = () => {
  const [fileContent, setFileContent] = useState('');
  const [offsetController, setOffsetController] = useState({ offset: -1, offsetChunk: 0 });
  const { setHistoryOfFiles } = useHistory();
  const [ArrayBuffer, setArrayBuffer] = useState();
  // receive by param the setArrayBuffer
  // setFileContent by params too
  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const arrayBuffer1 = await file.arrayBuffer();
        setArrayBuffer(arrayBuffer1);
        setHistoryOfFiles(fileInfoHandler(file));
        sliceArrayBuffer(1, offsetController, arrayBuffer1, setOffsetController, setFileContent);
      } catch (error) {
        console.error('Error reading the file:', error);
      }
    }
  };

  return (
    <div>
      <h1>Text File Import</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};
