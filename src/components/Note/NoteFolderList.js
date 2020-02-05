import React from 'react';
import '../Main/FolderList.css';


class FolderList extends React.Component {

    render() {
        const note = this.props.notes.find((note) => note.id === this.props.noteid);
        const folderid = note.folderId;
        const folder = this.props.folders.find((folder) => folder.id === folderid);
        const {goBack} = this.props;
        return (
            <div className='folder-list-div'>
                <button className="back-button" onClick={goBack}> Go Back </button>
                <h3>{folder.name}</h3>
            </div> 
        )
    }
};

export default FolderList;