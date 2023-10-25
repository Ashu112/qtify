import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({ title, data, type,filteredData=null,filteredDataValues=[],value=0,handleChange=null}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  //console.log("section filtererd data",data)
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "song"?<BasicTabs value={value} handleChange={handleChange} />:null}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel data={filteredDataValues} renderComponent={(data)=><Card data={data} type={type}/>}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
