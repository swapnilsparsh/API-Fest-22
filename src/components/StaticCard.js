import React from "react";
import StaticCardUI from "./StaticCardUI";
import "../styling/Static.css";

const CommunityData = [
  {
    id: "0",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--RIBRi0-i--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/4449/3da2c231-55bb-44a4-8e66-45e793742e9d.jpg",
    title: "Community Classroom",
    info: "The organisation is founded by Kunal Kushwaha. This community provide hands-on training, mentorship for FREE and have an inclusive community.",
    link: "https://www.commclassroom.org/",
    rating: "4",
  },
  {
    id: "1",
    img: "https://codeforcause.org/static/home/codeforcause.svg",
    title: "Code for cause",
    info: "An initiative to contribute to the Open Source community by providing training, guidance, and awareness about the possibilities in the field of software to students & professionals.",
    link: "https://codeforcause.org/",
    rating: "2",
  },
  {
    id: "2",
    img: "https://dscfau.com/static/media/logo.ade0843b.png",
    title: "Developer Student Clubs",
    info: "Developer Student Clubs for students involved in Google Developer Technology are university-based community organizations.",
    link: "https://developers.google.com/community/gdsc",
    rating: "2",
  },
  {
    id: "3",
    img: "https://gssoc.girlscript.tech/images/favicon/favicon.png",
    title: "Girl Script",
    info: "GirlScript is a section-8 NON PROFIT company registered under the government of India on the 2nd of June, 2017. ",
    link: "https://www.girlscript.tech/home",
    rating: "2",
  },
  {
    id: "6",
    img: "https://fossunited.org//files/fu.png",
    title: "FOSS United Foundation",
    info: "FOSS United Foundation is a registered non-profit founded in 2020, dedicated to the cause of building Free and Open Source (FOSS) projects .",
    link: "https://fossunited.org/",
    rating: "2",
  },
  {
    id: "7",
    img: "https://cdn.filestackcontent.com/RHJzJuTZQkSwIyQZO226",
    title: "Women who code",
    info: "A community focused on empowering women in technology, Women Who Code was established in 2011 and now has 230,000 members across 122 countries",
    link: "https://www.womenwhocode.com/",
    rating: "2",
  },
];

const StaticCard = () => {
  return (
    <>
      <p className="static_card_para">Top Communities</p>
      <div className="staticCard">
        <div className="static-card-outside">
          <div className="static-card-inside">
            <StaticCardUI
              image={CommunityData[0].img}
              title={CommunityData[0].title}
              info={CommunityData[0].info}
            />
          </div>

          <div className="static-card-inside">
            <StaticCardUI
              image={CommunityData[1].img}
              title={CommunityData[1].title}
              info={CommunityData[1].info}
            />
          </div>
          <div className="static-card-inside">
            <StaticCardUI
              image={CommunityData[2].img}
              title={CommunityData[2].title}
              info={CommunityData[2].info}
            />
          </div>

          <div className="static-card-inside">
            <StaticCardUI
              image={CommunityData[3].img}
              title={CommunityData[3].title}
              info={CommunityData[3].info}
            />
          </div>

          <div className="static-card-inside">
            <StaticCardUI
              image={CommunityData[4].img}
              title={CommunityData[4].title}
              info={CommunityData[4].info}
            />
          </div>
          <div className="static-card-inside">
            <StaticCardUI
              image={CommunityData[5].img}
              title={CommunityData[5].title}
              info={CommunityData[5].info}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticCard;
