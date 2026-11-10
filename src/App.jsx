
import "./App.css";
function HardwareCard(props) {
  return (
    <div className="hardware-card">
      <h2>{props.name}</h2>
      <p>{props.model}</p>
      <p>{props.usage}</p>

    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Fathan System Monitor</h1>
      <p>Welcome to your system dashboard</p>

      <div className="hardware-grid">
        <HardwareCard
          name="GPU"
          model="GTX 1050 Ti"
          usage="18%"
        />
        <HardwareCard
          name="CPU"
          model="Intel Core i5-10400F"
          usage="24%"
        />
        <HardwareCard
          name="RAM"
          model="34GB DDR4"
          usage="45%"
        />

      </div>
    </div>
  );
}


export default App;
