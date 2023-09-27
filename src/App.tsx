import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { Projects } from './components/projects';
import { Tasks } from './components/tasks';

const App: FC = () => {
  return (
    
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <img src={logo} className="App-logo" alt="logo" /> 
            <button>Добавить задачу</button>  
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
    </div>
  );
}

export default App;
