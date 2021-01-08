import React from 'react';


const SearchFilter = ({ searchValue, filterPhones }) => {

    return (
        <div>
            filter shown with <input value={searchValue} onChange={filterPhones} />
        </div>
    )
}

export default SearchFilter;