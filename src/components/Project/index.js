import React from 'react';

const Project = ({ onClose, currentProject }) => {
    const { name, category, description, index } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img src={require(`../../assets/large/${category}/${name} preview.jpg`).default} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Project;