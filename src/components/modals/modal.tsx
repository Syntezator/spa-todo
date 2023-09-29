import React, { FC } from 'react';

type ProjectModalProps = {
  closeModal: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = ({ closeModal }) => {
  return (
    <div className='modal' onClick={closeModal}>
      <div className='body' onClick={(e) => e.stopPropagation()}>
        
        <div className='projectModal'>
          <form>
             <input type='text' placeholder='Название проекта' />
             <input type='text' placeholder='Описание проекта' />
             <button>Создать проект</button>
          </form>
          
        </div>
      </div>
      
    </div>
  );
};

