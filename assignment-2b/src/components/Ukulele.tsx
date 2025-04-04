import List1 from "./List1";
import Table1 from "./Table1";
import Form1 from "./Form1";
import ukuleleImg from '../assets/ukulele-banner.jpg';

function Ukulele() {
  return (
    <div>
      <h2>Madhav's Hobby: Ukulele</h2>
      <img src={ukuleleImg} alt="Ukulele" style={{ maxWidth: "400px" }} />
      <List1 />
      <Table1 />
      <Form1 />
    </div>
  );
}

export default Ukulele;