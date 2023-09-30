import React, { FC } from 'react';

type ModalProps = {
  closeModal: () => void;
  content: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({ closeModal, content }) => {
  return (
    <div className='modal' onClick={closeModal}>
      <div className='body' onClick={(e) => e.stopPropagation()}>
        {content}
      </div>     
    </div>
  );
};

