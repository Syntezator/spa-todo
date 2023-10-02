import { FC, useState } from 'react';
import { TaskModal } from './modals/taskModal';



interface SearchProps {
  openModal: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const Search: FC<SearchProps> = ({}) => {
 

  

  return (
    <div className='task'>
        <div className='title'>Задача 1 <span className='id'>#1</span></div>
        <a href="#"  className='description'>Описание задачи</a> 
    </div>
  );
};