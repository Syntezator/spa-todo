import { FC, useEffect, useState } from 'react';
import { ProjectModal } from './modals/projectModal';
import { projectAPI } from '../api/projectAPI';

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsProps {
  openModal: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const Projects: FC<ProjectsProps> = ({ openModal, setModalContent }: ProjectsProps) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await projectAPI.getAll();
        setProjects(response.data); 
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
  
  const handleOpenModal = () => {
    openModal();
    setModalContent(<ProjectModal/>);
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
        <button className='btn-large' onClick={handleOpenModal}>Создать проект</button>
      </div>
      
    </div>
  );
};
