import { useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

<div>
  <PersonForm />;
</div>;

<div>
  <Filter />;
</div>;

<div>
  <Persons />;
</div>;

const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1231244" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filters, setFilters] = useState("");

  const addName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      id: persons.name,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(newName + " is already added to phenebook");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filters.toLowerCase()));

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilters(event.target.value);
  };
  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filters={filters} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((persons) => (
          <Persons key={persons.name} persons={persons} />
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
