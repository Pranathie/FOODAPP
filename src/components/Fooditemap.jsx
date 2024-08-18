import styles from "./fooditem.module.css";
export default function Fooditemap({ foo, setFoodid }) {
  return (
    <div className={styles.itemcon}>
      <img className={styles.itemima} src={foo.image} alt="" />
      <div className={styles.itemtitle}>
        <p className={styles.para}>{foo.title}</p>
      </div>
      <div className={styles.buttoncon}>
        <button
          onClick={() => {
            console.log(foo.id);
            setFoodid(foo.id);
          }}
          className={styles.button}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
