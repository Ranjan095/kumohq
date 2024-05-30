import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Dashboard from "./components/Dashboard";
import Dashbord2 from "./components/Dashbord2";
import Dashbord3 from "./components/Dashbord3";
import Dashboard4 from "./components/Dashboard4";
import Dashboard6 from "./components/Dashbord6";
import Dashboard8 from "./components/Dashboard8";
import Dashboard9 from "./components/Dashboard9";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Dashboard />
      <Dashbord2 />
      <Dashbord3 />
      <Dashboard4 />
      <Dashboard6 />
      <Dashboard8 />
      <Dashboard9 />
      <Footer />
    </div>
  );
}

export default App;
