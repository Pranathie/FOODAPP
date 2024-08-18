import { useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API = "f6484cac18a04c10bdcd8da08400ee90";
import { useEffect } from "react";
export default function Search({ food, setFood }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await res.json();
      console.log(data.results);
      setFood(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className={styles.searchcon}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
