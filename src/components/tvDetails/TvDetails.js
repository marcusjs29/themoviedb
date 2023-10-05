import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAiringToday, getTvAiringToday, getTvById, getTvOnTheAir, getTvPopular, getTvTopRated } from "../../APIHandler";
import { validateImage } from "../../Tools";

const TvDetails = () => {
    const { tvId } = useParams();
    const [tv, setTv] = useState();
    const [tvAiringToday, setTvAiringToday] = useState();
    const [tvOnTheAir, setTvOnTheAir] = useState();
    const [tvPopular, setTvPopular] = useState();
    const [tvTopRated, setTvTopRated] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setTv(await getTvById(tvId));
            setTvAiringToday(await getTvAiringToday(tvId));
            setTvOnTheAir(await getTvOnTheAir(tvId));
            setTvPopular(await getTvPopular(tvId));
            setTvTopRated(await getTvTopRated(tvId));
        }

        fetchData();

        window.scrollTo(0, 0);
    }, [tvId]);

    return (
        <article className="row">
            <figure className="col-lg-4 col-md-5 col-6 p-3">
                <img src={validateImage("https://image.tmdb.org/t/p/w500", tv?.poster_path)}
                    style={{ width: "100%", objectFit: "cover" }}
                    className="img-fluid"></img>
            </figure>
            <section className="col-lg-4 col-md-5 col-6 p-3">
                <h1>{tv?.name}</h1>
                <h6 style={{ fontStyle: "italic", fontWeight: "normal" }}>{tv?.overview}</h6>
                <p>Release date: <span className="text-info">{tv?.first_air_date}</span></p>
                <p>Popularity: {tv?.popularity}</p>
                <h4>Genres: </h4>
                {
                    tv?.genres.map((genre => (
                        <p className="text-info">{genre.name}</p>
                    )))
                }
            </section>
        </article>
    );
};

export default TvDetails;