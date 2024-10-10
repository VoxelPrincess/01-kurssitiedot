const PersonForm = (props) => (
  <form onSubmit={props.addName}>
    <div>
      Name:
      <input name="name" value={props.newName} />
    </div>
    <div>
      Number:
      <input name="number" value={props.newNumber} />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);
export default PersonForm;
