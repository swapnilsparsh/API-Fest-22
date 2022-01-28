import React from "react";
import "../src/Blog.css"
import Apple from '../src/Apple.jpg';
import Music from '../src/Music.jpg';
import Bitcoin from '../src/Bitcoin.jpg';
import Poetry from '../src/Poetry.jpg';
import Health from '../src/Health.jpg';

const Blog = () =>{
    return(
        <div className="blog">
            <h1 className="b-head">A lot is happening,<br></br><span className="b-head2">We are blogging about it.</span></h1>
            <div className="main">
                <div className="blog-sec1">
                <a target="_blank" id="anchor" href="https://www.cnet.com/tech/computing/ipad-pro-and-ipad-air-2022-rumors/">
                <img className="apl" src={Apple} alt="Apple" />
                <p id="date">Jan 26, 2022</p>
                <h1 id="blog-head">iPad Pro and iPad Air 2022: Every rumor we've heard so far</h1>
                <p className="apl-detail">Click to Read Full Article</p></a>

                </div>
                <div className="blog-sec2">
                    <div className="container1">
                        <div className="div1">
                        <a target="_blank" id="anchor" href="https://www.nme.com/news/music/watch-coldplay-stripped-back-performance-of-my-universe-live-interview-3147838">
                           <img id="b-img" src={Music} alt="Music"/>
                           <p id="date">Jan 27, 2022</p>
                           <h1 id="blog-head">Watch Coldplay's stripped-back performance of 'My Universe'</h1>
                           <p id="detail1">Click to Read Full Article</p></a>
                        </div>
                        <div className="div2">
                        <a target="_blank" id="anchor" href="https://www.weforum.org/agenda/2022/01/cryptocurrencies-2022-bitcoin-predictions/">
                            <img id="b-img" src={Bitcoin} alt="Bitcoin"/>
                            <p id="date">Jan 10, 2022</p>
                            <h1 id="blog-head">What's next for bitcoin and crypto?</h1>
                            <p id="detail2">Click to Read Full Article</p></a>
                        </div>
                    </div>
                    <div className="container2">
                    <div className="div3">
                    <a target="_blank" id="anchor" href="https://www.readpoetry.com/january-2022-poetry-releases/">
                           <img id="b-img" src={Poetry} alt="Poetry"/>
                           <p id="date">Jan 24, 2022</p>
                           <h1 id="blog-head">January 2022 Poetry Releases: 7 Stellar Picks</h1>
                           <p id="detail3">Click to Read Full Article</p></a>
                        </div>
                        <div className="div4">
                        <a target="_blank" id="anchor" href="https://artofhealthyliving.com/5-essentials-you-need-when-you-start-an-at-home-workout-routine/">
                            <img id="b-img" src={Health} alt="Health"/>
                            <p id="date">Jan 27, 2022</p>
                            <h1 id="blog-head">5 Essentials you need when you start Home Workout</h1>
                            <p id="detail4">Click to Read Full Article</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog