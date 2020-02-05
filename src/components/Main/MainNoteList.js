import React from 'react';
import STORE from '../STORE';
import Note from './MainNote';
import './NoteList.css';

class NoteList extends React.Component {
  render(){
    return(
      <div className="note-list">
        <ul>
          {STORE.notes.map(note =>
            <Note 
              id={note.id} 
              name={note.name} 
              content={note.content}
              modified={note.modified}
              />
            )}
        </ul>
        <button className='add-note-button' type='submit'>Add Note</button>
      </div>
    )
  }
}

export default NoteList;