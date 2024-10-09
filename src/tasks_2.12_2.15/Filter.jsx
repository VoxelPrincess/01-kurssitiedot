const Filter = (props) => (
  <div>
    filter shown with
    <input value={props.filters} onChange={props.handleFilterChange} />
  </div>
);

export default Filter;
