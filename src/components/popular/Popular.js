import React from "react";
import { Link } from "react-router-dom";

const Popular = ({ popularList }) => {

    if (popularList === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>Somethign Something timey whimey-stuff</h1>
                </div>
            </section>
        )
    }

    return (
        <section className="row mb-4">
            <h1 className="text-center mt-5">Popular Movies</h1>
            {
                popularList.results.map((popular, i) => (
                    i < 8 ?
                        <article key={popular.id} style={{ fontSize: "25px" }} className="col-sm-6 col-md-6 col-lg-3 col-12 mt-4 mb-0">
                            <div className="card w-100">
                                <h1 style={{ fontSize: "1em", height: 65 }} className="text-center card-title p-2">{popular.title}</h1>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                                    style={{ height: 450, width: "100%", objectFit: "cover" }}
                                    className="img-fluid border_bottom"></img>
                                <p className="card-text overflow-hidden p-3" style={{ height: 200, fontSize: "17px" }}>{popular.overview}</p>
                                <Link to={`/movie/details/${popular.id}`} className="btn btn-primary m-3">Details</Link>
                            </div>
                        </article>
                        : <React.Fragment key={popular.id}></React.Fragment>
                ))
            }
        </section>
    );
};

export default Popular;