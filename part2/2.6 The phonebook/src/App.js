import React, { useEffect, useState } from 'react';
import axios from 'axios';


//components
import AddPhoneForm from './components/addPhoneForm';
import PhonesList from './components/PhonesList';
import SearchFilter from './components/SearchFilter';



const App = () => {
  
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState({
    name: '', number: ''
  });

  const [ shownPhones, setShownPhones ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    setShownPhones(persons);
  }, [persons]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      });

  }, []);

  const addNewPerson = (event) => {
    setNewName(personData => {
      return { ...personData, name: event.target.value }
    });
  }

  const addNewNumber = (event) => {
    setNewName(personData => {
      return { ...personData, number: event.target.value }
    });
  }

  const validateForm = () => {
    if (newName.name && newName.number) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return false;
    }
    if (checkPhonebookName(newName.name)) {
      let newPerson = {
        name: newName.name,
        number: newName.number
      }
      setPersons(persons => [ ...persons, newPerson]);
      setNewName({name: '', number: ''});
    } else {
      alert(`${newName.name} is already added to phonebook`);
    }
  }

  const filterPhones = (search) => {
    let filterValue = search.target.value.toLowerCase();
    setSearchValue(filterValue);
    setShownPhones(persons.filter(person => person.name.toLowerCase().startsWith(filterValue)));
  }
  
  const checkPhonebookName = (name) => {
    const condition = persons.findIndex(person => person.name === name);
    
    if (condition >= 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    
    <div>
      <h2>Phonebook</h2>
      <SearchFilter 
        filterPhones={filterPhones}
        searchValue={searchValue}
      />
      <AddPhoneForm 
        formState={newName}
        onSubmit={handleSubmit} 
        onChangeName={addNewPerson}
        onChangeNumber={addNewNumber}  
      />
      <h2>Numbers</h2>
      <PhonesList 
        phoneList={shownPhones}
      />
    </div>
  )

}



export default App;
