import notFound from "../../img/not-found.jpg";
import s from "../NotFound/NotFound.module.css";

export default function NotFoundView() {
  return (
    <div className={s.wrapper}>
      <img width="700" src={notFound} alt="nothing-found"></img>
    </div>
  );
}
