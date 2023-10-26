import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]); // top albums data
  const [newAlbumsData, setNewAlbumsData] = useState([]); // new album data
  const [songData, setSongData] = useState([]); // Song data
  const [filteredDataValues, setFilteredDataValues] = useState([]); // array of filtered song data
  const [value, setValue] = useState(0);

  const handleChange = (event,newValue) => {
    // console.log("handle change clicked")
    // console.log(newValue)
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }
    else if (value === 3) {
      key = "jazz";
    }
    else if (value === 4) {
      key = "blues";
    }
    const res = songData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
   // console.log("value", value);
    generateSongsData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const generateAllSongData = async () => {
    try {
      const res = await fetchSongs();
      //console.log("song data",res)
      setSongData(res);
      setFilteredDataValues(res);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredData = (val) => {
   // console.log("filter data val",val)
    setFilteredDataValues(val);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={topAlbumsData}
          type="album"
          title="Top Albums"
          filteredDataValues={topAlbumsData}
        />
        <Section
          data={newAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumsData}
        />
         <Section
          data={songData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
