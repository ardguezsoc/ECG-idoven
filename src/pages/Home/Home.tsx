import { useEffect, useState } from 'react';
import { FileHandle } from '../../components/FileHandle/FileHandle';
import { sliceArrayBuffer } from '../../utils/arrayBufferUtils';
import { Chart, HighChart } from '../../components/Chart';
import { StyledMainContainer, StyledMainContainerECG } from './Home.styled';
import { Modal } from '../../components/Modal';
import { FabButton } from '../../components/Button';
import { ModalContent } from './components/ModalContent';

export interface OffsetController {
  offset: number;
  offsetChunk: number;
}
export const Home = () => {
  const [arrayBuffer, setArrayBuffer] = useState(new ArrayBuffer(0));
  const [fileContent, setFileContent] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const [offsetController, setOffsetController] = useState<OffsetController>({ offset: -1, offsetChunk: 0 });
  const [formValues, setFormValues] = useState({ switchValue: false, inputValue: 1 });

  const handleFileContent = async (file: File) => {
    const auxArrayBuffer = await file.arrayBuffer();
    setArrayBuffer(auxArrayBuffer);
    sliceArrayBuffer(1, offsetController, auxArrayBuffer, setOffsetController, setFileContent, formValues.switchValue);
  };

  const moveInFile = (offsetMove: 1 | -1) => {
    sliceArrayBuffer(
      offsetMove,
      offsetController,
      arrayBuffer,
      setOffsetController,
      setFileContent,
      formValues.switchValue
    );
  };

  const applySettings = (switchValue: boolean, inputValue: number) => {
    setFormValues({ switchValue, inputValue });
    sliceArrayBuffer(1, { offset: -1, offsetChunk: 0 }, arrayBuffer, setOffsetController, setFileContent, switchValue);
    setModalStatus(false);
  };

  return fileContent.length ? (
    <StyledMainContainer>
      {formValues.switchValue ? (
        <HighChart chartData={fileContent} resetFile={() => setFileContent('')} moveInFile={moveInFile} />
      ) : (
        <Chart chartData={fileContent} resetFile={() => setFileContent('')} moveInFile={moveInFile} />
      )}
      <Modal modalStatus={modalStatus} handleModalStatus={setModalStatus}>
        <ModalContent
          submitForm={applySettings}
          switchValue={formValues.switchValue}
          inputValue={formValues.inputValue}
        />
      </Modal>
      <FabButton onClick={() => setModalStatus(true)} icon="settings" />
    </StyledMainContainer>
  ) : (
    <StyledMainContainerECG>
      <FileHandle onChange={handleFileContent} />
    </StyledMainContainerECG>
  );
};
