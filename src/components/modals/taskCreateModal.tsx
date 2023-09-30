import React, { FC, useState } from 'react';
import { taskAPI } from '../../api/taskAPI';

type TaskCreateProps = {
  closeModal: () => void;
};

export const TaskCreateModal: FC<TaskCreateProps> = ({ closeModal }:TaskCreateProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('queue');
  const [pryority, setPriority] = useState('Низкий');

  const projectId = '1';
  const task = 'task';
  const submit = () => {
    taskAPI.create({title, description, number, status, pryority, task, projectId});
  }

  return (
    
        <div className='taskCreateModal'>
          <form>
            <input type='text' placeholder='Номер задачи' value={number} onChange={(e) => {setNumber(e.target.value)}} />
             <input type='text' placeholder='Название задачи' value={title} onChange={(e) => {setTitle(e.target.value)}} />
             <input type='text' placeholder='Описание задачи' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
             <select value={status} onChange={(e) => {setStatus(e.target.value)}}>
              <option disabled selected >Статус задачи</option>
              <option>queue</option>
              <option>development</option>
              <option>done</option>
             </select>
             <select value={pryority} onChange={(e) => {setPriority(e.target.value)}}>
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

