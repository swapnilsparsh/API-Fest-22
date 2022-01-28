const CommunityFilter = (props) => {
  console.log("Inside Community FIlter");
  const dropDownChangeHandler = (event) => {
    props.NameChangeFilter(event.target.value);
    props.dataFetch();
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="all">all</option>
          <option value="health">health</option>
          <option value="marketing">marketing</option>
          <option value="crypto">crypto</option>
        </select>
      </div>
    </div>
  );
};

export default CommunityFilter;
