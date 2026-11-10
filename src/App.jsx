
import "./App.css";
function HardwareCard() {
  return (
    <div>
      <h2>Gpu</h2>
      <p>GTX 1050 Ti</p>
      <p>18% Usage</p>

    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Fathan System Monitor</h1>
      <p>Wlacome to yur system dashboard</p>
      <HardwareCard />
    </div>
  );
}


export default App;
