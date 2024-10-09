const Persons = ({ persons }) => {
  return (
    <li>
      {persons.name} {persons.number}{" "}
    </li>
  );
};

export default Persons;
