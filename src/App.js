import React from 'react';
import './App.css';
import MainFolderList from './components/Main/MainFolderList';
import MainNoteList from './components/Main/MainNoteList';
import {Route, Link} from 'react-router-dom';
import FolderFolderList from './components/Folder/FolderFolderList';
import FolderNoteList from './components/Folder/FolderNoteList';
import STORE from './components/STORE';
import NoteFolderList from './components/Note/NoteFolderList';
import NoteNoteList from './components/Note/NoteNoteList';




class App extends React.Component {

  state = STORE;

  render(){
  return (
    <main>
      <header>
        <Link to="/">
          <h1>Noteful</h1>
        </Link>
      </header>
      <Route exact path="/" component={MainFolderList}/>
      <Route exact path="/" component={MainNoteList}/>
      <Route path="/Folder/:folderid" component={FolderFolderList}/>
      <Route 
        path="/Folder/:folderid" 
        render={(props) => {
          return (
          <FolderNoteList
            id={props.match.params.folderid}
            notes={this.state.notes}
         />
        )}}
      />
      <Route 
        path="/Note/:noteid"
        render={(props) => {
          return (
            <NoteFolderList
              goBack={() => props.history.goBack()}
              noteid={props.match.params.noteid}
              notes={this.state.notes}
              folders={this.state.folders}
            />
          )}} 
      />
       <Route 
        path="/Note/:noteid"
        render={(props) => {
          return (
            <NoteNoteList
              noteid={props.match.params.noteid}
              notes={this.state.notes}
            />
          )}} 
      />
    </main>
  );
}
}

export default App;
