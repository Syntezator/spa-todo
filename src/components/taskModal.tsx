import React, { FC } from 'react';

type TaskModalProps = {
  closeModal: () => void;
};

export const TaskModal: FC<TaskModalProps> = ({ closeModal }) => {
  return (
    <div className='modal' onClick={closeModal}>
      <div className='body' onClick={(e) => e.stopPropagation()}>
        <div className='taskModal'>
          
          <div className='title'>Задача 2 <span className='id'>#2</span></div>
          <div className='description'>Описание задачи</div>
          <div className='details'>
            <div className='timeStart'>Дата создания <strong>18:30 26.09.2023</strong></div>
            <div className='timeInProgress'>Время в работе <strong>18:30 26.09.2023</strong></div>
            <div className='timeEnd'>Дата окончания <strong>18:30 26.09.2023</strong></div>
            <div className='pryority'>Приоритет <strong>Высокий</strong></div>
            <div className='status'>Текущий статус <strong>Впроцессе</strong></div>           
          </div>
          <div className='d-flex'>
            <div className='files'><button>Добавить файл</button></div>
            <div className='subtasks'><button>Добавить подзадачу</button></div>
          </div>
          <div className='comments'> Комментарии</div>
        </div>
      </div>
      
    </div>
  );
};

