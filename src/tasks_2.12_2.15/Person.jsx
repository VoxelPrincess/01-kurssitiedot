import personsService from "./services/persons";

const Person = ({ person, onDelete }) => {
  return (
    <li>
      <span>
        {person.name} {person.number}
      </span>{" "}
      <button
        onClick={() => {
          if (window.confirm("Do you want to delete " + person.name + "?")) {
            personsService.deleteItem(person.id).then(() => onDelete());
          }
        }}>
        Delete
      </button>
    </li>
  );
};

export default Person;
