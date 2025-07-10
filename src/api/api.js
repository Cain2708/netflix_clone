import axios from "axios";

const URL = "https://api.themoviedb.org/3"; // <-- FIXED
const API_KEY = "281d2b0b9dd91f6e36e71dc8a0864acc";

const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
}