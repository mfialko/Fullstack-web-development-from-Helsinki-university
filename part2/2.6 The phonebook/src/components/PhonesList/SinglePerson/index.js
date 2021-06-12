import React from 'react';


const SinglePerson = ({ name, number, id, deleteContact }) => {

    return (
        <div>
            <span>{name} - {number}</span>
            <button type="button" onClick={() => deleteContact(id)}>Delete</button>
        </div>
    )
}

export default SinglePerson;