import { useState } from "react";
import Search from "./components/Search";
import Foodlistap from "./components/Foodlistap";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import Fooddetail from "./components/Fooddetail";
function App() {
  const [food, setFood] = useState([]);
  const [Foodid, setFoodid] = useState("658920");

  return (
    <div className="App">
      <Nav />
      <Search food={food} setFood={setFood} />
      <Container>
        <Innercontainer>
          <Foodlistap setFoodid={setFoodid} food={food} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetail Foodid={Foodid} />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
