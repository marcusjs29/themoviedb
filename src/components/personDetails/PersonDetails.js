import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonById } from "../../APIHandler";
import { validateImage } from "../../Tools";

const PersonDetails = () => {
    const { personId } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setPerson(await getPersonById(personId));
        }

        fetchData();
    }, []);

    return (
        <article className="row">
            <figure className="col-lg-4 col-md-5 col-6 p-3">
                <img src={validateImage("https://image.tmdb.org/t/p/w500", person?.profile_path)}
                style={{width: "100%", objectFit: "cover"}}
                className="img-fluid"></img>
            </figure>
            <section className="col-lg-8 col-md-7 col-6 py-1 px-3">
                <h1>{person?.name}</h1>
                <h5>Known for: {person?.known_for_department} </h5>
                <h6>Popularity: {person?.popularity}</h6>
                <p style={{fontStyle: "italic", fontWeight: "normal", fontSize: "15px"}}>{person?.biography}</p>

            </section>
        </article>
    );
};

export default PersonDetails;