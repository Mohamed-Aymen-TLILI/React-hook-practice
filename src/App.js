import React from 'react';
import './App.css';
import Like from './components/Like';
import FrameworkList from './components/FrameworkList';
import PostList from './components/PostList';
import Calculator from './components/Calculator';
import LevelA from './components/LevelA';
import MailContextProvider from './contexts/MailContext';
import Pot from './components/Pot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Practice</h1>
        {/* <MailContextProvider>
          <LevelA />
        </MailContextProvider> */}
        <Pot/>
      </header>
    </div>
  );
}

export default App;
