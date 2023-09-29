import { FC, useState } from 'react';
import { TaskModal } from './modals/taskModal';

interface Task {
  id: number;
  name: string;
  description: string;
  timeStart:string;
  timeInProgress:string;
  timeEnd:string;
  pryority:string;
  files:object;
  subtasks:object;
  comments:object;
}

interface TaskProps {

}

export const Task: FC<TaskProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='task'>
        <div className='title'>Задача 1 <span className='id'>#1</span></div>
        <a href="#" onClick={openModal} className='description'>Описание задачи</a>
        {isModalOpen && <TaskModal closeModal={closeModal} />}
    </div>
  );
};
