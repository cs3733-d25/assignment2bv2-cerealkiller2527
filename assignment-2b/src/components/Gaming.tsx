import List2 from "./List2.tsx";
import Table2 from "./Table2.tsx";
import Form2 from "./Form2.tsx";
import ukuleleImg from '../assets/gaming.jpg';

function Gaming() {
  return (
    <div>
      <h2>Alejandro's Hobby: Gaming</h2>
      <img src={ukuleleImg} alt="Ukulele" style={{ maxWidth: "400px" }} />
      <List2 />
      <Table2 />
      <Form2 />
    </div>
  );
}

export default Gaming;
