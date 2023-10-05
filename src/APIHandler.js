const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjJmZWMyNjk0N2Y2YWU3NjE1OTcyZWU1ZjNiMWUzZSIsInN1YiI6IjY0ZWM0YTE3ZTg5NGE2MDEzYmIxYWE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ztZcCTagZVkuKmO4BZXvEYQyUtrkHzz-mHxZ_QewOkk";

export const getNowPlayingMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getPopular = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getTopRated = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getUpcoming = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getMovieById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getSimilarMoviesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, {
        method: "GET",
        headers: {
            "content-type": "application.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getCastMembers = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        method: "GET",
        headers: {
            "content-type": "application.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getMultiSearchResult = async (query) => {
    const result = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, {
        method: "GET",
        headers: {
            "content-type": "application.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getTvAiringToday = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/airing_today`, {
        method: "GET",
        headers: {
            "content-type": "applciation.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getTvOnTheAir = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/on_the_air`, {
        method: "GET",
        headers: {
            "content-type": "application.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getTvPopular = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/popular`, {
        method: "GET",
        headers: {
            "content-type": "applciation.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getTvTopRated = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/top_rated`, {
        method: "GET",
        headers: {
            "content-type": "applciation.json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })
    return await result.json();
}

export const getTvById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
        method:"GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getPersonById = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/person/${id}`, {
        method: "GET",
        headers: {
            "content-type": "applciation/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}