import React, { FC } from 'react';

type TaskCreateProps = {
  closeModal: () => void;
};

export const TaskCreateModal: FC<TaskCreateProps> = ({ closeModal }) => {
  return (
    <div className='modal' onClick={closeModal}>
      <div className='body' onClick={(e) => e.stopPropagation()}>
        <div className='taskCreateModal'>
          <form>
             <input type='text' placeholder='Название задачи' />
             <input type='text' placeholder='Описание задачи' />
             <select>
              <option disabled selected>Статус задачи</option>
              <option>Queue</option>
              <option>Development</option>
              <option>Done</option>
             </select>
             <select>
              <option disabled selected>Приоритет задачи</option>
              <option>Низкий</option>
              <option>Средний</option>
              <option>Высокий</option>
             </select>
             <button>Создать задачу</button>
          </form>
          
        </div>
      </div>
      
    </div>
  );
};

