import React, { useEffect, useState } from "react";
import StaticCardUI from "./StaticCardUI";
import Hi from "./Check";
import CommunityFilter from "./CommunityFIlter";
import "../styling/Cards.css";

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
