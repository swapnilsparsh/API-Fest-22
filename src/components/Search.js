import React, { useRef } from "react";
import { TextField } from "@material-ui/core";

const Search = (props) => {
  const inputE1 = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
  };

  return (
    <div>
      {" "}
      <div class="input-group" style={{ padding: "100px" }}>
        <div class="form-outline">
          <input
            ref={inputE1}
            type="search"
            id="form1"
            class="form-control"
            value={props.term}
            onChange={getSearchTerm}
          />
          <label class="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
      {/* <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{
          marginBottom: 20,
          width: "100%",
          border: "1px solid white",
          color: "white",
          backgroundColor: "white",
        }}
      /> */}
    </div>
  );
};

export default Search;
