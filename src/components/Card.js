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
    <div className="card">
      Movies and TV Shows
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <p>{show.original_title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
