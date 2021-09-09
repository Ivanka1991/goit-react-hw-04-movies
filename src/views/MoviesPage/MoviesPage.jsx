import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import moviesApi from "../../services/movie-api";
import NotFoundView from "../NotFound/NotFound";
import Loader from "../../components/Loader/Loader";
import NoImgFound from "../../img/notFoundImg.png";
import baseImageURL from "../../services/BaseImgURL";
import Searchbar from "../../components/Searchbar/Searchbar";
import s from "../MoviesPage/MoviesPage.module.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const handleFormSubmit = (newQuery) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setMovies(null);
    setStatus(Status.IDLE);
    history.push({ ...location, search: `query=${newQuery}` });
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get("query");
    setQuery(newSearch);
  }, [location.search]);

  useEffect(() => {
    if (!query) return;

    setStatus(Status.PENDING);

    moviesApi
      .fetchMoviesByKeyWord(query)
      .then((results) => {
        if (results.length === 0) {
          toast.error(`Not Found on ${query}.`);
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query, error]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <NotFoundView />}
      {status === Status.RESOLVED && (
        <>
          <ul className={s.moviesList}>
            {movies.map((movie) => (
              <li key={movie.id} className={s.moviesItem}>
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={s.poster}
                    src={
                      movie.poster_path
                        ? `${baseImageURL}${movie.poster_path}`
                        : NoImgFound
                    }
                    alt={movie.title}
                  />
                </Link>
                <div className={s.box}>
                  <p className={s.title}>{movie.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
