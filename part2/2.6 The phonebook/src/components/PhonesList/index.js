import React from 'react';

//components
import SinglePerson from './SinglePerson';


const PhonesList = ({ phoneList }) => {

    return (
        <div className="phones">
            {phoneList.map(i => <SinglePerson key={`${i.name}`} name={i.name} number={i.number} />)}
        </div>
    )
}

export default PhonesList;