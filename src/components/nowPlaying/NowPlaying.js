import React from "react";
import { Link } from "react-router-dom";


const NowPlaying = ({ movieList }) => {

    if (movieList === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Movies...</h1>
                </div>
            </section>
        )
    }

    return (
        <section className="row">
            <h1 className="text-center mt-4">Now Playing</h1>
            {
                movieList.map((movie, i) => (
                    i < 8 ?
                        <article key={movie.id} style={{ fontSize: "25px" }} className="col-sm-6 col-md-6 col-lg-3 col-12 mt-4 mb-0">
                            <div className="card w-100">
                                <div className="">
                                    <h1 style={{ fontSize: "1em", height: 65 }} className="text-center card-title p-2">{movie.title}</h1>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        style={{ height: 450, width: "100%", objectFit: "cover" }}
                                        className="img-fluid border_bottom"></img>
                                    <p className="card-text overflow-hidden p-3" style={{ height: 200, fontSize: "17px" }}>{movie.overview}</p>
                                    <Link to={`/movie/details/${movie.id}`} className="btn btn-primary m-3">Details</Link>
                                </div>
                            </div>
                        </article>
                        : <React.Fragment key={movie.id}></React.Fragment>
                ))
            }
        </section>
    );
};

export default NowPlaying;