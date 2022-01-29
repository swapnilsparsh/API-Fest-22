import React, { useEffect, useState } from "react";
import StaticCardUI from "./StaticCardUI";
import CommunityFilter from "./CommunityFIlter";
import "./cards.css";
import axios from "axios";

const Cards = ({ fetchUrl }) => {
  const [filteredName, setFilteredName] = useState("all");

  const filterChangeHandler = (selectedName) => {
    setFilteredName(selectedName);
  };
  const URL = `https://community-info-api.herokuapp.com/posts/${filteredName}`;

  // const [loading, setLoading] = useState([]);
  // const [check, setCheck] = useState(false);

  // var response;
  // useEffect(() => {
  //   const loadPose = async () => {
  //     setCheck(true);
  //     response = await axios.get(
  //       `https://community-info-api.herokuapp.com/posts/${filteredName}`
  //     );
  //     console.log(filteredName);
  //     setLoading(response.data);
  //     setCheck(false);
  //     // console.log(response.data);
  //   };
  //   loadPose();
  // }, []);

  //  console.log(loading);

  const [receive, setReceive] = useState([]);
  const fetchData = () => {
    console.log(URL);
    console.log("inside fd");

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
  }, [URL]);

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
