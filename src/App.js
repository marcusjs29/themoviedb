import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetials from "./components/movieDetails/MovieDetails";
import SearchResult from "./components/searchResult/SearchResult";

import "./app.scss"
import Tv from "./components/tv/Tv";
import TvDetails from "./components/tvDetails/TvDetails";
import PersonDetails from "./components/personDetails/PersonDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/details/:movieId" element={<MovieDetials />} />
          <Route path="/person/details/:personId" element={<PersonDetails />}></Route>
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/tv" element={<Tv />}/>
          <Route path="/tv/details/:tvId" element={<TvDetails />} ></Route>
          <Route path="*" element={<>HTTP 404 - The page you were looking for does not exist.</>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
