import { FC } from 'react';
import { Task } from './task';

interface Tasks {
  id: number;
  name: string;
  description: string;
}

interface TasksProps {
  // Здесь вы можете определить свойства (props) компонента
}

export const Tasks: FC<TasksProps> = (props) => {
  // Ваша реализация компонента Tasks

  return (
    <div className="row justify-content-center">
      
      <div className='col-4'>
        <div className='queue tasks'>
          <div className='header'>
            <h4>Queue</h4>
            <p>This item hasn't been started</p>
          </div>
          <Task/>
          <Task/>
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
