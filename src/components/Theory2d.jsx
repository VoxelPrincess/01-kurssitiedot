import axios from "axios";

axios.get("http://localhost:3001/persons").then((response) => {
  const persons = response.data;
  console.log(persons);
});

const addPerson = (event) => {
  event.preventDefault();
  const personObject = {
    name: "Pedro Pe",
    number: "050-345778",
  };

  axios.post("http://localhost:3001/persons", personObject).then((response) => {
    console.log(response);
  });
};

const Theory2d = () => {
  return (
    <>
      <button onClick={addPerson}>Add person</button>
    </>
  );
};

export default Theory2d;
