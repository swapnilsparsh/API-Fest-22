const CommunityFilter = (props) => {
  console.log("Inside Community FIlter");
  const dropDownChangeHandler = (event) => {
    props.NameChangeFilter(event.target.value);
    props.dataFetch();
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Categories</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="all">All</option>
          <option value="health">Health</option>
          <option value="marketing">Marketing</option>
          <option value="crypto">Crypto</option>
          <option value="sing">Music</option>
          <option value="poetry">Poetry</option>
          <option value="dance">Dancing</option>
          <option value="">Tech</option>
          <option value="enter">Entertainment</option>
          {/* <option value="enter">Investing</option> */}
        </select>
      </div>
    </div>
  );
};

export default CommunityFilter;
