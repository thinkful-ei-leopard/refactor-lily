import React from 'react';

function Note (props) {
    return (
        <div>
        <li>
            <h3>{props.name}</h3>
            <p className='note-date'>Date modified on {new Date(props.modified).toLocaleDateString()}</p>
            <button className='delete-button' type='submit'>Delete</button>
        </li>
        <p>{props.content}</p>
        </div>
    )
}

export default Note;