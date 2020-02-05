import React from 'react';
import Folder from './Folder';
import STORE from './STORE';


class FolderList extends React.Component {
    render() {
        return (
            <div>
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