import React from 'react';
import './App.css';
import FolderList from './components/FolderList';
import NoteList from './components/NoteList';
//import {Link} from 'react-router-dom';



class App extends React.Component {

  render(){
  return (
    <main>
      <header>
        <h1>Noteful</h1>
        <FolderList />
        <NoteList />
      </header>
    </main>
  );
}
}

export default App;
