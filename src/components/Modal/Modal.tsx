import { FC, ReactNode } from 'react';
import { Modal as MuiModal } from '@mui/material';
import { StyledContentModal } from './Modal.styled';

interface ModalProps {
  modalStatus: boolean;
  handleModalStatus: (status: boolean) => void;
  children: ReactNode;
}
export const Modal: FC<ModalProps> = ({ modalStatus, handleModalStatus, children }) => {
  return (
    <MuiModal
      open={modalStatus}
      onClose={() => handleModalStatus(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledContentModal>{children}</StyledContentModal>
    </MuiModal>
  );
};
