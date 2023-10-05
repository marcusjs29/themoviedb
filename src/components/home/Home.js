import { useState, useEffect } from "react";

import { getNowPlayingMovies } from "../../APIHandler";
import { getPopular } from "../../APIHandler";
import { getTopRated } from "../../APIHandler";
import { getUpcoming } from "../../APIHandler";
import NowPlaying from "../nowPlaying/NowPlaying";
import Popular from "../popular/Popular";

const Home = () => {

    const [nowPlayingMovies, setNowPlayingMovies] = useState();
    const [nowPopular, setNowPopular] = useState();
    const [nowTopRated, setNowTopRated] = useState();
    const [nowUpcoming, setNowUpcoming] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setNowPlayingMovies(await getNowPlayingMovies());
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            setNowPopular(await getPopular());
        }

        fetchData2();
    }, []);

    useEffect(() => {
        const fetchData3 = async () => {
            setNowTopRated(await getTopRated());
        }

        fetchData3();
    }, []);

    useEffect(() => {
        const fetchData4 = async () => {
            setNowUpcoming(await getUpcoming());
        }

        fetchData4();
    }, [])

    return (
        <>
            <NowPlaying movieList={nowPlayingMovies?.results} />
            <Popular popularList={nowPopular} />
        </>
    );
};

export default Home;