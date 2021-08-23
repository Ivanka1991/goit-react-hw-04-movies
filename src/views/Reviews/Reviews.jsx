import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moviesApi from "../../services/movie-api";
import s from "../Reviews/Reviews.module.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    moviesApi
      .FetchMovieReviews(movieId)
      .then((results) => {
        if (results.lenght === 0) {
          throw new Error("Ops.. we dont have reviews yet");
        }
        setReviews(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.RESOLVED && (
        <ul className={s.reviews}>
          {reviews.map((review) => (
            <li className={s.reviewsItem} key={review.id}>
              <h2 className={s.title}>{review.author}</h2>
              <span className={s.reviewsContent}>{review.content}</span>
            </li>
          ))}
        </ul>
      )}
      {status === Status.REJECTED && <p>{error.message}</p>}
    </>
  );
}
