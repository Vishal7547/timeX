import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Navbar";
import Details from "./pages/Details";
import Master from "./pages/Master.jsx";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, []);
  console.log("gug", data);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Master data={data} status={loading} />} />
          <Route path="/details/:id" element={<Details data={data} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
