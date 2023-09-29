import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { Projects } from './components/projects';
import { Tasks } from './components/tasks';
import { TaskCreateModal } from './components/modals/taskCreateModal';

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <button onClick={openModal}>Добавить задачу</button>  
          </div>
        </div>   
      </header>
      <div className="main">
          <div className="container">
            <BrowserRouter>
              <Routes> 
                <Route path='/' element={<Projects/>} />
                <Route path='tasks' element={<Tasks/>} />
              </Routes>
            </BrowserRouter>
          </div>
      </div>
      {isModalOpen && <TaskCreateModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
