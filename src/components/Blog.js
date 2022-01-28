import React from 'react';
import '../styling/Blog.css';
import Article from './Article';
import Apple from '../images/Apple.jpg';
import Music from '../images/Music.jpg';
import Bitcoin from '../images/Bitcoin.jpg';
import Poetry from '../images/Poetry.jpg';
import Health from '../images/Health.jpg';


const Blogs = () => (
  <div className="blog_section" id="blog">
    <div className="blog_heading">
      <h1>A lot is happening,</h1>
      <h1>We're blogging about it.</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <a href="https://www.cnet.com/tech/computing/ipad-pro-and-ipad-air-2022-rumors/" target="_blank" rel="noreferrer"><Article imgUrl={Apple} date="Jan 26, 2022" text="iPad Pro and iPad Air 2022: Every rumor we've heard so far : New versions of the iPad Pro and iPad Air could be on the way. We're collecting all the rumors, from release date to processor upgrades." link="Click to Read Full Article" /></a>
      </div>
      <div className="blog-container_groupB">
        <a href="https://www.weforum.org/agenda/2022/01/cryptocurrencies-2022-bitcoin-predictions/" target="_blank" rel="noreferrer"><Article imgUrl={Bitcoin} date="Jan 10, 2022" text="What's next for bitcoin and crypto?" link="Click to Read Full Article" /></a>
        <a href="https://www.readpoetry.com/january-2022-poetry-releases/" target="_blank" rel="noreferrer"><Article imgUrl={Poetry} date="Jan 24, 2022" text="January 2022 Poetry Releases: 7 Stellar Picks" link="Click to Read Full Article" /></a>
        <a href="https://www.nme.com/news/music/watch-coldplay-stripped-back-performance-of-my-universe-live-interview-3147838" target="_blank" rel="noreferrer"><Article imgUrl={Music} date="Jan 27, 2022" text="Watch Coldplay's stripped-back performance of 'My Universe'" link="Click to Read Full Article" /></a>
        <a href="https://artofhealthyliving.com/5-essentials-you-need-when-you-start-an-at-home-workout-routine/" target="_blank" rel="noreferrer"><Article imgUrl={Health} date="Jan 27, 2022" text="5 Essentials you need when you start Home Workout" link="Click to Read Full Article" /></a>
      </div>
    </div>
  </div>
);

export default Blogs;