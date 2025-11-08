import React from "react";
import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  console.log(src);
  
  return (
    <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ width: "100%", maxWidth: "360px" }}>
      <img
        src={src || image}
        className="card-img-top"
        alt="news"
        style={{ height: "200px", objectFit: "cover" }}
        onError={(e) => e.target.src = image}
      />
      <div className="card-body bg-light">
        <h5 className="card-title fw-semibold text-dark">
          {title ? title.slice(0, 60) : "No Title Available"}
        </h5>
        <p className="card-text text-secondary" style={{ minHeight: "60px" }}>
          {description ? description.slice(0, 90) + "..." : "No description available."}
        </p>
        <div className="d-flex justify-content-center">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
