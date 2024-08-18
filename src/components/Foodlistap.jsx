import Fooditemap from "./Fooditemap";
export default function Foodlistap({ food, setFoodid }) {
  return (
    <div>
      {food.map((foo) => (
        <Fooditemap setFoodid={setFoodid} key={foo.id} foo={foo} />
      ))}
    </div>
  );
}
