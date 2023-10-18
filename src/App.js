import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums } from "./api/api";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";

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
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
