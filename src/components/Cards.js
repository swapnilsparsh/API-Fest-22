import React, { useEffect, useState } from "react";
import StaticCardUI from "./StaticCardUI";
import CommunityFilter from "./CommunityFIlter";
import "../styling/Cards.css";

const Cards = () => {
  const [filteredName, setFilteredName] = useState("all");
  console.log(filteredName);

  const filterChangeHandler = (selectedName) => {
    setFilteredName(selectedName);
    fetchData();
  };
  const URL = `https://community-info-api.herokuapp.com/posts/${filteredName}`;

  // console.log(receive);
  console.log(URL);
  console.log(filteredName, "Hello");
  const [receive, setReceive] = useState([]);
  const fetchData = () => {
    console.log(URL);
    console.log(Math.random());

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let check = data;
        //console.log(check);
        setReceive(check);
      });
  };

  useEffect(() => {
    console.log("Inside usEffect");
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    <div className="card-ch">
        <CommunityFilter NameChangeFilter={filterChangeHandler} />
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
  );
};

export default Cards;
