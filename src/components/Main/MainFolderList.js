import React from 'react';
import Folder from './MainFolder';
import STORE from '../STORE';
import './FolderList.css';


class FolderList extends React.Component {
    render() {
        return (
            <div className='folder-list-div'>
                <ul>
                  {STORE.folders.map (folder =>
                    <Folder id={folder.id} name={folder.name} /> 
                    )}
                </ul>
                <button className='add-folder-button' type='submit'>
                    Add Folder
                </button>
            </div>
        )
    }
};

export default FolderList;