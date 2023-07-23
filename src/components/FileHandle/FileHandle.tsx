import React, { useRef } from 'react';
import { useHistory } from '../../hooks';
import { fileInfoHandler } from './utils/fileInfoHandler';
import { Text } from '../Text';
import { Button } from '../Button';
import { Box } from '@mui/material';
import { StyledFileHandleContainer } from './FileHandle.style';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { theme } from '../../themes/themes';

interface FileHandleProps {
  onChange: (file: File) => void;
}

export const FileHandle: React.FC<FileHandleProps> = ({ onChange }) => {
  const { setHistoryOfFiles } = useHistory();
  const inputRef = useRef<HTMLInputElement>(null); // Specify the type of the ref here
  const { t } = useTranslation();

  const onDrop = (droppedFile: File[]) => handleFileChange(undefined, droppedFile[0]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      text: ['.txt'],
    },
  });

  const handleFileChange = (event?: React.ChangeEvent<HTMLInputElement>, fileDropped?: File): void => {
    const file = event?.target?.files?.[0] || fileDropped;
    if (file) {
      setHistoryOfFiles(fileInfoHandler(file));
      onChange(file);
    }
  };

  return (
    <StyledFileHandleContainer $isDragActive={isDragActive}>
      <Box id="fileHandleDrag" {...getRootProps()}>
        <input ref={inputRef} type="file" onChange={handleFileChange} {...getInputProps()} />{' '}
        <Box id="fileHandleTextContainer">
          <Text fontVariant="h6">{isDragActive ? t('dragnDrop.dragnDropFiles') : t('dragnDrop.dropFilesHere')}</Text>
          <Box>
            <Text fontVariant="h6">{t('or')}</Text>
            <Button onClick={() => inputRef.current?.click()}>{t('button.uploadFile')}</Button>
          </Box>
          <Text color={theme.text.notFound}>{t('dragnDrop.conditions')}</Text>
        </Box>
      </Box>
    </StyledFileHandleContainer>
  );
};
