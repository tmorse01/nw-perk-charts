import { useState } from "react";
import "./App.css";
import BubbleChart from "./components/charts/BubbleChart";
import CircleChart from "./components/charts/CircleChart";
import armorPerksFile from "./data/armorPerks.json";

function App() {
  const [data, setData] = useState(armorPerksFile.armorPerks);

  return (
    <div className="chart-container">
      <CircleChart data={data} />
    </div>
  );
}

export default App;
