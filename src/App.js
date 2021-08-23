import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./views/HomePage/Homepage"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MovieDeteilsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundView = lazy(() => import("./views/NotFound/NotFound"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDeteilsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
