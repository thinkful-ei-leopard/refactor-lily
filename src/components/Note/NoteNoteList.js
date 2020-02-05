import React from 'react';
import STORE from '../STORE';
import Note from './NoteNote';
import '../Main/NoteList.css';

class NoteList extends React.Component {
  render(){
      const note = this.props.notes.find((note) => note.id === this.props.noteid);
    return(
      <div className="note-list">
        <ul>
            <Note 
              id={note.id} 
              name={note.name} 
              content={note.content}
              modified={note.modified}
              />
        </ul>
      </div>
    )
  }
}

export default NoteList;

