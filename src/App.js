import { useState } from "react";
import "./App.css";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=e0578aab27ca56d455e61fc6ca80b6b7";
import axios from "axios";

let SEARCH_URL =
  BASE_URL + "search/movie?" + API_KEY + "&sort_by=popularity.desc&query=";

function App() {
  const [show, setShow] = useState([]);
  return <div className="App"></div>;
}

export default App;
