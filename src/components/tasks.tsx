import { FC, useEffect, useState } from 'react';
import { Task } from './task';
import { taskAPI } from '../api/taskAPI';
import { TaskModal } from './modals/taskModal';
import { TaskCreateModal } from './modals/taskCreateModal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../store/reducers";
import { deleteTask, setTasks } from '../store/actions';

interface Tasks {
  id: number;
  number:number;
  title: string;
  description: string;
  projectId:string | undefined;
  taskId:number;
}

interface TasksProps {
  openModal: () => void;
  closeModal: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const Tasks: FC<TasksProps> = ({ openModal, closeModal, setModalContent}: TasksProps) => {
  const {projectId} = useParams(); 
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskReducer.tasks) || [];

  useEffect(() => {
    (async () => {
      try {
        const response = await taskAPI.getAll(projectId);
        dispatch(setTasks(response.data)); 
      } catch (error) {
        console.error('error');
      }
    })();
  }, []);

  const handleTaskCreateModal = () => {
    openModal();
    setModalContent(<TaskCreateModal projectId={projectId} closeModal={closeModal}/>);
  };

  const handleTaskModal = (taskId:number) => {
    openModal();
    setModalContent(<TaskModal taskId={taskId}/>);
  };

  const handleDelete = async (taskId: number) => {
    try {
      await taskAPI.delete(taskId);
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.error('error');
    }
  };
  return (
    <div className="row justify-content-center">
      <div className='col-12'>
        <button className='btn-large' onClick={handleTaskCreateModal}>Создать задачу</button>
      </div>
      <div className='col-4'>
        <div className='queue tasks'>
          <div className='header'>
            <h4>Queue</h4>
            <p>This item hasn't been started</p>
          </div>
          
          {tasks.map((task: Tasks) => (
              <div key={task.id} className='task'>
                <div className='title'>{task.title}<span className='id'>{task.number}</span></div>
                <a href="#" onClick={() => handleTaskModal(task.id)}className='description'>{task.description}</a> 
                <p className='delete' onClick={() => handleDelete(task.id)}>Удалить</p>
            </div>
          ))}
          
        </div>
      </div>
      <div className='col-4'>
        <div className='development tasks'>
          <div className='header'>
            <h4>Development</h4>
            <p>This is actively being worked on</p>
          </div>

        </div>
      </div>
      <div className='col-4'>
        <div className='done tasks'>
          <div className='header'>
            <h4>Done</h4>
            <p>This has been completed</p>
          </div>

        </div>
      </div>
      
    </div>
  );
};
