import React from 'react';


const SearchFilter = ({ searchValue, filterCountries }) => {

    return (
        <div>
            filter shown with <input value={searchValue} onChange={filterCountries} />
        </div>
    )
}

export default SearchFilter;