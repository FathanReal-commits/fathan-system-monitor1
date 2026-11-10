
import "./App.css";
function HardwareCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.model}</p>
      <p>{props.usage}</p>

    </div>
  );
}

function App() {
  return (
    <div>
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
      <h1>Fathan System Monitor</h1>
      <p>Welcome to your system dashboard</p>

    </div>
  );
}


export default App;
