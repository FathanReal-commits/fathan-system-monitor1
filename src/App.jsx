import { useState, useEffect } from "react";
import "./App.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function CpuChart() {
  const [cpuData, setCpuData] = useState([
  { time: "10:00", usage: 20 },
  { time: "10:05", usage: 35 },
  { time: "10:10", usage: 28 },
  { time: "10:15", usage: 50 },
  { time: "10:20", usage: 42 },
]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuData(previousData => {
        const newReading = {
          time: new Date().toLocaleTimeString(),
          usage: Math.floor(Math.random() * 100)
        };

        return [...previousData.slice(1), newReading];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);


return (
  <div className="chart-container">
    <h2>Cpu Usage History</h2>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={cpuData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="usage"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.2}
        />



      </AreaChart>
    </ResponsiveContainer>
  </div>
)
}
function HardwareCard(props) {
  return (
    <div className="hardware-card">
      <h2>{props.name}</h2>
      <p>{props.model}</p>
      <p>{props.usage}</p>

    </div>
  );
}

function Sidebar() {
    return (
      <aside className="sidebar">
          <h2>Fathan Monitor</h2>
          <nav>
              <p>Overview</p>
              <p>Cpu</p>
              <p>Memory</p>
              <p>Gpu</p>
              <p>Storage</p>
              <p>Network</p>
              <p>Process</p>
              <p>Settings</p>
          </nav>
      </aside>
    )
}

function App() {
  const [gpuUsage, setGpuUsage] = useState(18);
  return (
    <div className="app">
      <Sidebar/>

      <main className="main-content">
      <h1>Fathan System Monitor</h1>
      <p>Welcome to your system dashboard</p>

      <div className="hardware-grid">
        <HardwareCard
          name="GPU"
          model="GTX 1050 Ti"
          usage={`${gpuUsage}%`}
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
      <CpuChart />
      <button onClick={() => setGpuUsage(gpuUsage + 5)}>
        increase Gpu Usage
      </button>
      </main>
    </div>
  );
}


export default App;
