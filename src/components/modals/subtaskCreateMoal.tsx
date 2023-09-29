import React, { FC } from 'react';

type SubtaskCreateProps = {
  closeModal: () => void;
};

export const SubtaskCreateModal: FC<SubtaskCreateProps> = ({ closeModal }) => {
  return (
    <div className='modal' onClick={closeModal}>
      <div className='body' onClick={(e) => e.stopPropagation()}>
        <div className='subtaskCreateModal'>
          <form>
             <input type='text' placeholder='Название подзадачи' />
             <input type='text' placeholder='Описание подзадачи' />
             
             <button>Создать подзадачу</button>
          </form>
          
        </div>
      </div>
      
    </div>
  );
};

