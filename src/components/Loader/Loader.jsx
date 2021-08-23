import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "../Loader/Loader.module.css";

export default function Spiner() {
  return (
    <div className={s.loader}>
      <Loader
        type="Grid"
        color="#ff8c00"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
