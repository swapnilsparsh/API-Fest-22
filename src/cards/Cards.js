import React, { useEffect, useState } from "react";
import Card from "./CardUI";

const Cards = () => {
  const [receive, setReceive] = useState([]);
  const fetchData = () => {
    fetch("https://community-info-api.herokuapp.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let check = data;
        console.log(check);
        setReceive(check);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container-fluid d-flex justify-content-center">
      {receive.map((data) => (
        <div className="col-mod-4">
          <Card
            image={data.img}
            title={data.title}
            link={data.link}
            info={data.info}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
