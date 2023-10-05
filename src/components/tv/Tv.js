import { useEffect, useState } from "react";

import { getTvAiringToday, getTvOnTheAir, getTvPopular, getTvTopRated } from "../../APIHandler";

import TvAiringToday from "../tvAiringToday/TvAiringToday";

 


const Tv = () => {

    const [nowTvAiringToday, setNowTvAiringToday] = useState();
    const [nowTvOnTheAir, setNowTvOnTheAir] = useState();
    const [nowTvPopular, setNowTvPopular] = useState();
    const [nowTvTopRated, setNowTvTopRated] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setNowTvAiringToday(await getTvAiringToday());
            setNowTvOnTheAir(await getTvOnTheAir());
            setNowTvPopular(await getTvPopular());
            setNowTvTopRated(await getTvTopRated());
        }

        fetchData();
    }, [])

    return (
        <>
            <TvAiringToday tvList={nowTvAiringToday?.results} />
        </>
    );
};

export default Tv;