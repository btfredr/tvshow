import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { baseURL } from "./utils/contants";
import axios from "axios";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    function getShows() {
      axios.get(baseURL).then((response) => {
        setShows(response.data.results);
        console.log(response.data.results);
      });
    }

    getShows();
  }, []);

  return (
    <div className="App">
      <div className="card-group">
        {shows.map((show) => {
          return (
            <div className="card" key={show.id}>
              <img src={show.poster_path} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{show.title}</h5>
                <p className="card-text">{show.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
