import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getMultiSearchResult } from "../../APIHandler";
import { validateImage } from "../../Tools";

const SearchResult = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setSearchResult(await getMultiSearchResult(searchParams.get("query")));
        }

        fetchData();
    }, [searchParams.get("query")]);

    const handleImageByMediaType = (multi) => {
        const media = multi.media_type;
        if (media === "tv" || media === "movie"){
            return multi.poster_path;
        }
        else if (media === "person"){
            return multi.profile_path;
        }
        return undefined;
    }

    const handleTitleByMediaType = (multi) => {
        const media = multi.media_type;
        if (media === "tv" || media === "person"){
            return multi.name;
        }
        else if (media === "movie"){
            return multi.title;
        }
        return "N/A";
    }

    const handleLinkByMediaType = (multi) => {
        const media = multi.media_type;
        if (media === "movie"){
            return `/movie/details/${multi.id}`
        }
        else if (media === "tv"){
            return `/tv/details/${multi.id}`
        }
        else if (media === "person"){
            return `/person/details/${multi.id}`
        }
        return "N/A";
    }

    return (
        <section className="row g-3">
            {
                searchResult?.results.map(multi => (
                    <article className="col-sm-6 col-md-4 col-lg-2">
                        <div className=" w-100">
                            <img src={validateImage("https://image.tmdb.org/t/p/w500", handleImageByMediaType(multi))} className="card-img-top" alt="..." />
                            <div className="" style={{ height: 250 }}>
                                <h5 className="card-title">{handleTitleByMediaType(multi)}</h5>
                                <p className="card-text limit-movie-overview">{multi.overview}
                                    {/* {movie.overview.length > 30 ? (movie.overview.substring(0, 100) + "...") : movie.overview} */}
                                </p>
                                <Link to={handleLinkByMediaType(multi)} className="btn btn-primary">See More</Link>
                            </div>
                        </div>
                    </article>
                ))
            }
        </section>
    );
};

export default SearchResult;