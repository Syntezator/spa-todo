import { FC, useState } from 'react';
import { TaskModal } from './modals/taskModal';
import { taskAPI } from '../api/taskAPI';
import { deleteTask } from '../store/actions';
import { useDispatch } from 'react-redux';

interface Task {
  id: number;
  number:number;
  title: string;
  description: string;
  start:string;
  timeInProgress:string;
  timeEnd:string;
  priority:string;
  status:string;
  files:object;
  subtasks:object;
  comments:object;
  projectId:number;
}


interface TaskProps {
  openModal: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
  task:Task
}

export const Task: FC<TaskProps> = ({task, openModal, setModalContent}) => {
  const dispatch = useDispatch();

  const handleTaskModal = () => {
    openModal();
    setModalContent(<TaskModal task={task}/>);
  };
  
  const handleDelete = async () => {
    try {
      await taskAPI.delete(task.id);
      dispatch(deleteTask(task.id));
    } catch (error) {
      console.error('error');
    }
  };

  return (
    <div key={task.id} className='task'>
      <div className='title'>{task.title}<span className='id'>{task.number}</span></div>
      <a onClick={() => handleTaskModal()}className='description'>{task.description}</a> 
      <p className='delete' onClick={() => handleDelete()}>Удалить</p>
    </div>
  );
};
