import React from 'react';

//components
import SinglePerson from './SinglePerson';


const PhonesList = ({ phoneList, deleteContact }) => {

    return (
        <div className="phones">
            {phoneList.map(i => <SinglePerson deleteContact={deleteContact} key={`${i.id}-${i.name}`} name={i.name} id={i.id} number={i.number} />)}
        </div>
    )
}

export default PhonesList;