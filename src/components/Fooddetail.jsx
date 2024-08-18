import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function Fooddetail({ Foodid }) {
  const [ids, setids] = useState({});
  const [isloading, setisloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${Foodid}/information`;
  const API = "f6484cac18a04c10bdcd8da08400ee90";
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API}`);
      const data = await res.json();
      console.log(data);
      setids(data);
      setisloading(false);
    }
    fetchfood();
  }, [Foodid]);
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}>{ids.title}</h1>
        <img className={styles.recipeimg} src={ids.image} alt="" />
        <div className={styles.recipedata}>
          <span>
            <strong>⌛{ids.readyInMinutes} Minutes</strong>
          </span>
          <span>
            {" "}
            <strong>👨‍👩‍👧‍👦Serves:{ids.servings}</strong>
          </span>
          <span>
            <strong>
              {ids.vegetarian ? "🥗Vegetarian" : "🍗Non-Vegetarian"}
            </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <div className={styles.imgcon}>
          <ol>
            {isloading ? (
              <p>is loading...</p>
            ) : (
              ids.extendedIngredients.map((ingre) => (
                <div>
                  <img
                    className={styles.img}
                    src={
                      `https://spoonacular.com/cdn/ingredients_100x100/` +
                      ingre.image
                    }
                    alt=""
                  />

                  <h4>{ingre.original}</h4>
                </div>
              ))
            )}
          </ol>
        </div>
        <h2>Instructions</h2>
        <div className={styles.recipeinstru}>
          <ol>
            {isloading ? (
              <p>is loading...</p>
            ) : (
              ids.analyzedInstructions[0].steps.map((step1) => (
                <li>{step1.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
