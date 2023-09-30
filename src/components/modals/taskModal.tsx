import React, { FC, useEffect, useState } from 'react';
import { taskAPI } from '../../api/taskAPI';

interface Task {
  id: number;
  number:number;
  title: string;
  description: string;
  start:string;
  timeInProgress:string;
  timeEnd:string;
  pryority:string;
  status:string;
  files:object;
  subtasks:object;
  comments:object;
}

type TaskModalProps = {
  taskId:number
};

export const TaskModal: FC<TaskModalProps> = ({taskId}) => {
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await taskAPI.getById(taskId);
        setTask(response.data); 
      } catch (error) {
        console.error('error');
      }
    })();
  }, []);

  return (
        
        <div className='taskModal'>
          {task ? (
            <div>
              <div className='title'>{task.title} <span className='id'>#{task.number}</span></div>
                <textarea className='description' placeholder='Описание задачи'>{task.description}</textarea>
                <div className='details'>
                  <div className='timeStart'>Дата создания <strong>{task.start}</strong></div>
                  <div className='timeInProgress'>Время в работе <strong>18:30 26.09.2023</strong></div>
                  <div className='timeEnd'>Дата окончания <strong>18:30 26.09.2023</strong></div>
                  <div className='pryority'>Приоритет <strong>{task.pryority}</strong></div>
                  <div className='status'>Текущий статус <strong>{task.status}</strong></div>           
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
          ) : (
            <p>Loading...</p>
          )}
        </div>

  );
};

