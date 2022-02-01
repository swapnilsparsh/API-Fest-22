import React, { useEffect, useState } from "react";
import StaticCardUI from "./StaticCardUI";
import Hi from "./Check";
import CommunityFilter from "./CommunityFIlter";
import "../styling/Cards.css";
import { name } from "./Explore";

const Cards = () => {
  if (localStorage.myValue === undefined) {
    localStorage.myValue = "all";
  }
  const [filteredName, setFilteredName] = useState(localStorage.myValue);

  const filterChangeHandler = (selectedName) => {
    setFilteredName(selectedName);
  };

  const URL = `https://community-info-api.herokuapp.com/posts/${filteredName}`;
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

  console.log(sessionStorage.myValue);

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
        <div className="card-main">
          {receive.map((data) => (
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
