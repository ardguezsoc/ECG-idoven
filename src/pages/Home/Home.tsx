import { useState } from 'react';
import { FileHandle } from '../../components/FileHandle/FileHandle';
import { sliceArrayBuffer } from '../../utils/arrayBufferUtils';
import { Chart } from '../../components/Chart';
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
    sliceArrayBuffer(1, offsetController, auxArrayBuffer, setOffsetController, setFileContent);
  };

  const moveInFile = (offsetMove: 1 | -1) => {
    sliceArrayBuffer(offsetMove, offsetController, arrayBuffer, setOffsetController, setFileContent);
  };

  const applySettings = (switchValue: boolean, inputValue: number) => {
    setFormValues({ switchValue, inputValue });
    setModalStatus(false);
  };

  return fileContent.length ? (
    <StyledMainContainer>
      <Chart chartData={fileContent} resetFile={() => setFileContent('')} moveInFile={moveInFile} />
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
