import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}
