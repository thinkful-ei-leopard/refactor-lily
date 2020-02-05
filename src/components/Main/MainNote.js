import React from 'react';
import { Link } from 'react-router-dom';

function Note (props) {
    return (
        <li>
            <Link to={`/Note/${props.id}`}>
            <h3>{props.name}</h3>
            </Link>
            <p className='note-date'>Date modified on {new Date(props.modified).toLocaleDateString()}</p>
            <button className='delete-button' type='submit'>Delete</button>
        </li>
    )
}

export default Note;