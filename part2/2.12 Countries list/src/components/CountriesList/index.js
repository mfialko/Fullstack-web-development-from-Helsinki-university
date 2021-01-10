import React from 'react';

//components
import SingleCountry from './SingleCountry';


const CountriesList = ({ countriesList }) => {

    return (
        <div className="countries">
            {(countriesList.length === 1) ? countriesList.map(item => <SingleCountry key={`${item.name}`} data={item} buttonOpen={false} open={true} />) :
                countriesList.map(i => <SingleCountry key={`${i.name}`} data={i} buttonOpen={true} open={false} />)}
        </div>
    )
}

export default CountriesList;