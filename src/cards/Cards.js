import React, { useEffect, useState } from "react";
import StaticCardUI from "./StaticCardUI";
import CommunityFilter from "./CommunityFIlter";
import "./cards.css";

const Cards = () => {
  const [receive, setReceive] = useState([]);

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
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

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
