import React from 'react';
import '../styling/Article.css';

const Article = ({ imgUrl, date, text,link }) => (
  <div className="article_container">
    <div className="article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="article-content">
      <div style={{background:"transparent"}}>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>{link}</p>
    </div>
  </div>
);

export default Article;