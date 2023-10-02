import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { Projects } from './components/projects';
import { Tasks } from './components/tasks';
import { TaskCreateModal } from './components/modals/taskCreateModal';
import { Modal } from './components/modals/modal';
import { ProjectModal} from './components/modals/projectModal';

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const openModal = () => {

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <img src={logo} className="App-logo" alt="logo" /> 
            
          </div>
        </div>   
      </header>
      <div className="main">
          <div className="container">
            <BrowserRouter>
              <Routes> 
                <Route path='/' element={<Projects setModalContent={setModalContent} openModal={openModal} />} />
                <Route path='/tasks/:projectId' element={<Tasks setModalContent={setModalContent} openModal={openModal} closeModal={closeModal}/>} />
              </Routes>
            </BrowserRouter>
          </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} content={modalContent} />}
    </div>
  );
}

export default App;
