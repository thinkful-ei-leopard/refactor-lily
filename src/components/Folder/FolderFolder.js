import React from 'react';
import { Link } from 'react-router-dom';

function Folder(props){
    return(
      <li>
        <Link to={`/Folder/${props.id}`}>
        {props.name}
        </Link>
      </li>
    )
}

export default Folder;