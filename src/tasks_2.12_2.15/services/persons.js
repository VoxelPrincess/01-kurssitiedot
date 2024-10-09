import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

//This to test different situation:
// const getAll = () => {
//   const request = axios.get(baseUrl);
//   const nonExisting = {
//     id: 10000,
//     name: "This person is not saved to server",
//     number: "",
//   };
//   return request.then((response) => response.data.concat(nonExisting));
// };

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteItem = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  deleteItem,
};
