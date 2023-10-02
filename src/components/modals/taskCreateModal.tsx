import React, { FC, useState } from 'react';
import { taskAPI } from '../../api/taskAPI';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/actions';
import { useParams } from 'react-router-dom';

type TaskCreateProps = {
  closeModal: () => void;
  projectId:string | undefined
};

export const TaskCreateModal: FC<TaskCreateProps> = ({ closeModal, projectId }:TaskCreateProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState('queue');
  const [priority, setPriority] = useState('Низкий');
  const dispatch = useDispatch();
  

  const task = 'task';
  const submit = () => {
    console.log(projectId)
      taskAPI.create({title, description, number, status, priority, task, projectId}).then(response => {
        dispatch(addTask(response.data));
      });
  }

  return (
        <div className='taskCreateModal'>
          <form>
            <input type='text' placeholder='Номер задачи' value={number} onChange={(e) => {setNumber(Number(e.target.value))}} />
             <input type='text' placeholder='Название задачи' value={title} onChange={(e) => {setTitle(e.target.value)}} />
             <input type='text' placeholder='Описание задачи' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
             <select value={status} onChange={(e) => {setStatus(e.target.value)}}>
              <option disabled selected >Статус задачи</option>
              <option>queue</option>
              <option>development</option>
              <option>done</option>
             </select>
             <select value={priority} onChange={(e) => {setPriority(e.target.value)}}>
              <option disabled selected>Приоритет задачи</option>
              <option>Низкий</option>
              <option>Средний</option>
              <option>Высокий</option>
             </select>
             <button onClick={submit}>Создать задачу</button>
          </form>
          
        </div>
  
  );
};

