import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "../Cast/Cast.module.css";
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
export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    moviesApi
      .FetchCastInfo(movieId)
      .then((cast) => {
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <NotFoundView />}
      {status === Status.RESOLVED && (
        <ul className={s.cast}>
          {actors.map((actor) => (
            <li className={s.actor} key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${baseImageURL}${actor.profile_path}`
                    : NoImgFound
                }
                alt={actor.original_name}
                className={s.photo}
              />
              <h4 className={s.name}>{actor.original_name}</h4>
              <span className={s.character}>{actor.character}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
