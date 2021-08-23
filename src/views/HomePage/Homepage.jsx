import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";
import moviesApi from "../../services/movie-api";
import NotFoundView from "../NotFound/NotFound";
import Loader from "../../components/Loader/Loader";
import NoImgFound from "../../img/notFoundImg.png";
import baseImageURL from "../../services/BaseImgURL";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesApi
      .FetchTrendingMovies()
      .then((results) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);

  return (
    <main className={s.container}>
      <h1 className={s.mainTitle}>Trending of This Week</h1>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <NotFoundView />}
      {status === Status.RESOLVED && (
        <>
          <ul className={s.moviesList}>
            {movies.map(({ poster_path, title, id }) => (
              <li className={s.moviesItem} key={id}>
                <Link to={{ pathname: `/movies/${id}` }}>
                  <img
                    src={
                      poster_path ? `${baseImageURL}${poster_path}` : NoImgFound
                    }
                    alt={title}
                    className={s.poster}
                  />
                </Link>
                <div className={s.box}>
                  <p className={s.title}>{title}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
