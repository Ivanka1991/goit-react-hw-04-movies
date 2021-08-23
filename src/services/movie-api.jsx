import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f8f9751a5749389ca93ecf12bfd37415";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

//список

const FetchTrendingMovies = async () => {
  try {
    const config = {
      url: `trending/movie/week`,
    };
    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};

//поиск по ключевому слову

async function fetchMoviesByKeyWord(query) {
  if (!query) {
    return;
  }
  try {
    const config = {
      url: `search/movie`,
      params: {
        query,
      },
    };
    const { data } = await axios(config, query);
    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
//запрос полной информации

async function FetchMovieInfo(id) {
  try {
    const config = {
      url: `movie/${id}`,
    };

    const { data } = await axios(config, id);
    return data;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

//запрос актеров

async function FetchCastInfo(id) {
  try {
    const config = {
      url: `movie/${id}/credits`,
    };

    const { data } = await axios(config, id);
    return data.cast;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
//запрос обзора

async function FetchMovieReviews(id) {
  try {
    const config = {
      url: `movie/${id}/reviews`,
    };

    const { data } = await axios(config, id);
    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

const api = {
  FetchTrendingMovies,
  fetchMoviesByKeyWord,
  FetchMovieInfo,
  FetchCastInfo,
  FetchMovieReviews,
};

export default api;
