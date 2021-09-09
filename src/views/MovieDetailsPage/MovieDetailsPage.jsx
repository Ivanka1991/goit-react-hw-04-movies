import { useEffect, useState, lazy, Suspense } from "react";
import {
  useParams,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
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

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export default function MoviesDeteilsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesApi
      .FetchMovieInfo(movieId)
      .then(({ poster_path, original_title, popularity, overview, genres }) => {
        setMovie({
          src: poster_path ? `${baseImageURL}${poster_path}` : `${NoImgFound}`,
          title: original_title,
          score: popularity.toFixed(1),
          overview,
          genres,
        });
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

  const goBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <main className={s.container}>
      <button className={s.btn} onClick={goBack} type="button">
        Go Back
      </button>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <NotFoundView />}
      {status === Status.RESOLVED && (
        <>
          <div className={s.wrapper}>
            <img className={s.img} src={movie.src} alt={movie.title} />
            <div className={s.description}>
              <h2 className={s.movieTitle}>{movie.title}</h2>
              <h3 className={s.title}>Score</h3>
              <p className={s.info}>{movie.score}</p>
              <h3 className={s.title}>About</h3>
              <p className={s.info}>{movie.overview}</p>
              <h3 className={s.title}>Genres</h3>
              <ul className={s.genre}>
                {movie.genres.map((genre) => (
                  <li className={s.generItem} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className={s.subMenu}>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    from: location.state ? location.state.from : "/",
                  },
                }}
                className={s.submenuItem}
                activeClassName={s.activeSubmenuItem}
              >
                Cast
              </NavLink>
            </li>

            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    from: location.state ? location.state.from : "/",
                  },
                }}
                className={s.submenuItem}
                activeClassName={s.activeSubmenuItem}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          {
            <Suspense fallback={<Loader />}>
              <Route path={`${path}/cast`}>
                {status === Status.RESOLVED && <Cast />}
              </Route>
              <Route path={`${path}/reviews`}>
                {status === Status.RESOLVED && <Reviews />}
              </Route>
            </Suspense>
          }
        </>
      )}
    </main>
  );
}
