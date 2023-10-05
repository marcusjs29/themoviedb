import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById, getSimilarMoviesById, getCastMembers } from "../../APIHandler";
import { validateImage } from "../../Tools";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [castMembers, setCastMembers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setMovie(await getMovieById(movieId));
            setSimilarMovies(await getSimilarMoviesById(movieId));
            setCastMembers(await getCastMembers(movieId));
        }

        fetchData();

        window.scrollTo(0, 0);
    }, [movieId]);

    return (
        <article className="row">
            <figure className="col-lg-4 col-md-5 col-6 p-3">
                <img src={validateImage("https://image.tmdb.org/t/p/w500", movie?.poster_path)}
                    style={{ width: "100%", objectFit: "cover" }}
                    className="img-fluid"></img>
            </figure>
            <section className=" col-lg-8 col-md-7 col-6 py-1 px-3">
                <h1>{movie?.title}</h1>
                <h6 style={{ fontStyle: "italic", fontWeight: "normal" }}>{movie?.overview}</h6>
                <p>Release date: <span className="text-info">{movie?.release_date}</span></p>
                <p>Budget: {(movie?.budget)?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <p>Revenue: {(movie?.revenue)?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <p>Total Earnings: {(movie?.revenue - movie?.budget)?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <h4>Genres: </h4>
                {
                    movie?.genres.map((genre => (
                        <p className="text-info">{genre.name}</p>
                    )))
                }
            </section>
            <div className="row">
                <section className="col-12">
                    <article></article>
                    <h2>Cast:</h2>
                    <div className="row">
                        {
                            castMembers?.cast.map(castMember => (
                                <section key={castMember.id} className="col-lg-2 col-sm-4">
                                    <div className="card w-100 mb-4"style={{minHeight: 450}}>
                                        <Link style={{textDecoration: "none", color: "white"}} to={`/person/details/${castMember.id}`}>

                                            <img src={validateImage("https://image.tmdb.org/t/p/w500", castMember?.profile_path)} className="card-img-top" alt="..." />

                                            <div className="card-body">
                                                <h5 className="card-title">{castMember.name}</h5>
                                                <p className="card-text"> As the role of: {castMember.character}</p>
                                            </div>
                                        </Link>

                                    </div>
                                </section>
                            ))
                        }
                    </div>

                </section>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Similar Movies</h2>
                </div>
                {
                    similarMovies?.results.map(similarMovie => (
                        <article key={similarMovie.id} className="col-md-3 col-sm-6">
                            <div className="card w-100 mb-4">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", similarMovie?.poster_path)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{similarMovie.title}</h5>
                                    <p className="card-text">
                                        {similarMovie.overview.length > 30 ? (similarMovie.overview.substring(0, 100) + "...") : similarMovie.overview}
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Release Date: <span className="text-info">{similarMovie.release_date}</span></strong></li>
                                    <li className="list-group-item"><strong>Popularity: </strong><span className="text-info">{similarMovie.popularity}</span></li>
                                    <li className="list-group-item"><strong>Average: </strong><span className="text-info">{similarMovie.vote_average}</span></li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/movie/details/${similarMovie.id}`} className="card-link btn btn-info">See More</Link>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </article>

    );
};

export default MovieDetails;