import { FC, useEffect, useState } from 'react';
import { ProjectModal } from './modals/projectModal';
import { projectAPI } from '../api/projectAPI';

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsProps {
  // Здесь вы можете определить свойства (props) компонента
}

export const Projects: FC<ProjectsProps> = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await projectAPI.getAll();
        setProjects(response.data); // Обновление состояния projects
      } catch (error) {
        console.error('error');
      }
    })();
  }, []);

  const handleDelete = async (projectId: number) => {
    try {
      await projectAPI.delete(projectId);
      const response = await projectAPI.getAll();
      setProjects(response.data);
    } catch (error) {
      console.error('error');
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="row justify-content-center ">
      <div className='col-6'>
        <div className='projects'>
            {projects.map((project: Project) => (
              <div key={project.id} className="project">
                <a href="/tasks">{project.title}</a>
                <span>{project.description}</span>
                <button onClick={() => handleDelete(project.id)}>Удалить</button>
              </div>
            ))}
          
        </div>
        <button className='btn-large' onClick={openModal}>Создать проект</button>
      </div>
      {isModalOpen && <ProjectModal closeModal={closeModal} />}
    </div>
  );
};
