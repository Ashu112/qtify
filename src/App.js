import { useEffect, useState } from "react";
import styles from './App.module.css'
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const generateNewAlbumsData = async()=>{
    try{
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data = {newAlbumsData} type="album" title="New Albums"/>
      </div>
    </div>
  );
}

export default App;
