import React, { useEffect, useState } from "react";
import StaticCardUI from "./StaticCardUI";
import Hi from "./Check";
import CommunityFilter from "./CommunityFIlter";
import "../styling/Cards.css";
import { name } from "./Explore";
import Search from "./Search";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  if (localStorage.myValue === undefined) {
    localStorage.myValue = "all";
  }
  const [filteredName, setFilteredName] = useState(localStorage.myValue);

  const filterChangeHandler = (selectedName) => {
    setFilteredName(selectedName);
  };

  const URL = `http://localhost:3233/posts/${filteredName}`;
  const [receive, setReceive] = useState([]);
  const fetchData = () => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let check = data;
        setReceive(check);
      });
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newList = receive.filter((currentList) => {
        return Object.values(currentList.title)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newList);
    } else {
      setSearchResults(receive);
    }
  };

  if (searchTerm.length < 1) {
    // setReceive(receive);
  } else {
    console.log(searchResults);
    //setReceive(searchResults);
  }

  //console.log(sessionStorage.myValue);

  useEffect(() => {
    console.log("Inside usEffect");
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return (
    <>
      <Hi />
      <div className="card-ch">
        <CommunityFilter
          className="filter"
          NameChangeFilter={filterChangeHandler}
        />
        <Search term={searchTerm} searchKeyword={searchHandler} />
        <div className="card-main">
          {(searchTerm.length ? searchResults : receive).map((data) => (
            <div className="card-c">
              <StaticCardUI
                key={data.id}
                image={data.img}
                title={data.title}
                link={data.link}
                info={data.info}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
