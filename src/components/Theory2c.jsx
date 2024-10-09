import axios from "axios";

axios.get("http://localhost:3001/persons").then((response) => {
  const persons = response.data;
  console.log(persons);
});

const Theory2c = () => {
  return <></>;
};

export default Theory2c;
