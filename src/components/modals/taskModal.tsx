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
          <textarea className='description' placeholder='Описание задачи'></textarea>
          <div className='details'>
            <div className='timeStart'>Дата создания <strong>18:30 26.09.2023</strong></div>
            <div className='timeInProgress'>Время в работе <strong>18:30 26.09.2023</strong></div>
            <div className='timeEnd'>Дата окончания <strong>18:30 26.09.2023</strong></div>
            <div className='pryority'>Приоритет <strong>Высокий</strong></div>
            <div className='status'>Текущий статус <strong>Впроцессе</strong></div>           
          </div>
          <div className='row align-items-center'>
            <div className='col-6'>
              <div className='files'>Choose a file or drag here</div>
            </div>
            <div className='col-6 text-right'>
              <div className='subtasks'><button>Добавить подзадачу</button></div>
            </div>
          </div>
          <div>
            <textarea className='comments'placeholder='Комментарии'> </textarea>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

