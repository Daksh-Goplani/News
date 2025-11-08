import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import './News.css';


const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const url1 = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []));
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 fw-bold">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="row justify-content-center">
        {articles.map((news, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
