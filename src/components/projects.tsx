import { FC } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectsProps {
  // Здесь вы можете определить свойства (props) компонента
}

export const Projects: FC<ProjectsProps> = (props) => {
  // Ваша реализация компонента Projects

  return (
    <div className="row justify-content-center ">
      <div className='col-12'>
        <div className='projects'>
          <div className='body'>
            <div className='project'>
              <a href='/tasks'>Project 1</a>
              <button>Удалить</button>
            </div>
            <div className='project'>
              <a href='/tasks'>Project 2</a>
              <button>Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
