import React from 'react';

const Project = ({ onClose, currentProject }) => {
    const { name, category, description, url } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img src={require(`../../assets/large/${category}/${name} preview.JPG`).default} alt="current category" />
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">Click to view on GitHub</a>
                <p> </p>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Project;