import React, { useEffect, useState } from 'react';


//components
import AddPhoneForm from './components/addPhoneForm';
import PhonesList from './components/PhonesList';
import SearchFilter from './components/SearchFilter';
import ContactsService from './services/phonebook';



const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState({
    name: '', number: ''
  });

  const [ shownPhones, setShownPhones ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    setShownPhones(persons);
  }, [persons]);

  useEffect(() => {
    ContactsService.getAll()
      .then(response => {
        setPersons(response);
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
      ContactsService.create(newPerson)
        .then(person => {
          setPersons(persons => [ ...persons, person]);
          setNewName({name: '', number: ''});
        })
    } else {
      if (window.confirm(`${newName.name} is already added to phonebook, replace the old number with a new one?`)) {
        let personId = persons.find(item => item.name === newName.name).id;
        let newPerson = {
          name: newName.name,
          number: newName.number
        }
        ContactsService.update(personId, newPerson)
          .then(UpdatedPerson => {
            setPersons(persons.map(person => person.name !== newName.name ? person : UpdatedPerson))
            setNewName({name: '', number: ''});
          })
      }
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

  const checkPhonebookId = (id) => {
    const condition = persons.findIndex(person => person.id === id);
    
    if (condition >= 0) {
      return true;
    } else {
      return false;
    }
  }

  const deleteContact = (id) => {

    if (window.confirm("Do you really want to delete this contact?")) {
      if (checkPhonebookId(id)) {
        ContactsService.deleteById(id)
          .then(person => {
            setPersons(persons => [ ...persons.filter(item => item.id !== id)]);
          })
      } else {
        alert(`${newName.name} is already deleted from phonebook`);
      }
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
      {shownPhones?.length > 0 && <PhonesList 
        phoneList={shownPhones}
        deleteContact={deleteContact}
      />}
    </div>
  )

}



export default App;
