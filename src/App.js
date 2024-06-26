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
      <div className="container">
        <div className="card-group">
          <div className="row row-cols-[0-9]">
            {shows.map((show) => {
              return (
                <div className="col-sm-4">
                  <div className="card" key={show.id}>
                    <img
                      src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
                      alt=""
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{show.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
