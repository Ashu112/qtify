import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums } from "./api/api";
import Card from "./components/Card/Card";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {topAlbumsData.map((item) => {
        return <Card data={item} type="album" key={item.id} />;
      })}
    </div>
  );
}

export default App;
