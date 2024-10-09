import { useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Person from "./Person";
import { useEffect } from "react";
import personsService from "./services/persons";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    personsService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    const newNumber = event.target.elements.number.value;

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(existingPerson.name + " is already added to phonebook, replace the old number with a new one?")
      ) {
        personsService.update(existingPerson.id, newPerson).then((data) => {
          setPersons(persons.map((item) => (item.id !== existingPerson.id ? item : data)));
          event.target.reset();
        });
      }
    } else {
      personsService.create(newPerson).then((data) => {
        setPersons(persons.concat(data));
        event.target.reset();
      });
    }
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filters.toLowerCase()));

  const handleFilterChange = (event) => {
    setFilters(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filters={filters} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm addName={addName} />

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <Person
            key={person.id}
            person={person}
            onDelete={() => {
              personsService.getAll().then((data) => {
                setPersons(data);
              });
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
