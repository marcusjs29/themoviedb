import React from "react";
import { Link } from "react-router-dom";

import { validateImage } from "../../Tools";


const TvAiringToday = ({ tvList }) => {

    if (tvList === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Series...</h1>
                </div>
            </section>
        )
    }

    return (
        <div className="row">
            <h1 className="text-center mt-4">Series Airing Today</h1>
            {
                tvList.map((tv, i) => (
                    i < 12 ?
                        <article key={tv.id} style={{ fontSize: "25px" }} className="col-lg-3 col-sm-4 col-6 mt-4 mb-0">
                            <div className="card w-100">
                                <h1 style={{ fontSize: "1em", height: 65 }} className=" text-center card-title p-2">{tv.name}</h1>

                                <img src={validateImage("https://image.tmdb.org/t/p/w500", tv?.poster_path)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="car-text">{tv.first_air_date}</p>
                                    <Link to={`/tv/details/${tv.id}`} className="btn btn-primary m-3" >Details</Link>
                                </div>
                            </div>
                        </article>
                        : <React.Fragment key={tv.id}></React.Fragment>
                ))
            }
        </div>
    );
};

export default TvAiringToday;