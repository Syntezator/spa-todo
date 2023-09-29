import React, { FC, useState } from 'react';
import { projectAPI } from '../../api/projectAPI';

type ProjectModalProps = {
  closeModal: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = () => {
    projectAPI.create({title,description})
  }

  return (
    <div className='modal' onClick={closeModal}>
      <div className='body' onClick={(e) => e.stopPropagation()}>
        
        <div className='projectModal'>
          <form>
             <input type='text' placeholder='Название проекта' value={title} onChange={(e) => {setTitle(e.target.value)}} />
             <input type='text' placeholder='Описание проекта' value={description} onChange={(e) => {setDescription(e.target.value)}} />
             <button onClick={submit}>Создать проект</button>
          </form>
          
        </div>
      </div>
      
    </div>
  );
};

