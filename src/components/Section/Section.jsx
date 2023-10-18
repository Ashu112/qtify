import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "collapse All" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
