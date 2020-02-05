import React from 'react';
import STORE from './STORE';

function Note (props) {
    return (
        <li>
            <h3>{props.name}</h3>
        </li>
    )
}

export default Note;