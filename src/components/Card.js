import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/contants";

const Card = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setShows(response.data.results);
      console.log(response.data.results);
    });
  }, []);
  return (
    <div className="card-group">
      {shows.map((show) => {
        <div className="card">
          <img src={show.poster_path} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{show.title}</h5>
            <p className="card-text">{show.overview}</p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Card;
