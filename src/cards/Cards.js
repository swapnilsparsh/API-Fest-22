import React, { useEffect, useState } from "react";
import Card from "./CardUI";

const staticData = [
  {
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--RIBRi0-i--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/4449/3da2c231-55bb-44a4-8e66-45e793742e9d.jpg",
    title: "Community Classroom",
    info: "The organisation is founded by Kunal Kushwaha. This community provide hands-on training, mentorship for FREE and have an inclusive community.Here, one can get expert guidance with career, Open Source, and internships, jobs around the world.",
    link: "https://www.commclassroom.org/",
    rating: "4",
  },
  {
    img: "https://codeforcause.org/static/home/codeforcause.svg",
    title: "Code for cause",
    info: "An initiative to contribute to the Open Source community by providing training, guidance, and awareness about the possibilities in the field of software to students & professionals.",
    link: "https://codeforcause.org/",
    rating: "2",
  },
  {
    img: "google.com ",
    info: "Build projects, practice and learn to code from scratch - without leaving your browser.",
    link: "https://codedamn.com/",
    rating: "3",
  },
];

const Cards = () => {
  const [receive, setReceive] = useState([]);
  const fetchData = () => {
    fetch("https://community-info-api.herokuapp.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let check = data.result;
        setReceive(check);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(staticData);
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-mod-4">
        {receive.map((data) => {
          <div>{console.log(data.info)}</div>;
        })}
      </div>
    </div>
  );
};

export default Cards;
