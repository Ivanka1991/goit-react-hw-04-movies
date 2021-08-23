import { useState } from "react";
import { toast } from "react-toastify";
import s from "../Searchbar/Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handelQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.warn("Oops, enter your query !");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.formInput}
        type="text"
        autoFocus
        autoComplete="off"
        placeholder="search..."
        value={query}
        onChange={handelQueryChange}
      />
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
}
