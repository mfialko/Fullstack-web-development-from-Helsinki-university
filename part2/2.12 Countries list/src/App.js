import React, { useEffect, useState } from 'react';
import axios from 'axios';


//components
import CountriesList from './components/CountriesList';
import SearchFilter from './components/SearchFilter';



const App = () => {
  
  const [ countries, setCountries ] = useState([]);

  const [ shownCountries, setShownCountries ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    setShownCountries(countries);
  }, [countries]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      });
  }, []);

  const filterCountries = (search) => {
    let filterValue = search.target.value.toLowerCase();
    setSearchValue(filterValue);
    setShownCountries(countries.filter(country => country.name.toLowerCase().startsWith(filterValue)));
  }


  return (
    
    <div>
      <h2>find countries</h2>
      <SearchFilter 
        filterCountries={filterCountries}
        searchValue={searchValue}
      />
      <h2>Numbers</h2>
      {searchValue.length === 0 ? 'Type to search country' : (shownCountries.length > 10) ? 'Too many matches, specify another filter' : <CountriesList 
        countriesList={shownCountries}
      />}
    </div>
  )

}



export default App;
