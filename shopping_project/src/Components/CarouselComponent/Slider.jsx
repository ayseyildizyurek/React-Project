import React, { useRef, useState, useEffect, useContext } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { SliderContext } from "../Contexts/SliderContext";
import styles from "./Slider.module.css";

const SliderCarousel = () => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    slidesData,
    handlePrev,
    handleNext,
    progress,
    currentIndex,
    sliderRef,
  } = useContext(SliderContext);

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className={styles.slides}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slidesData.map((slide, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.prev} onClick={() => handlePrev()}>
          <GrPrevious />
        </button>
        <button className={styles.next} onClick={() => handleNext()}>
          <GrNext />
        </button>
      </div>
      <div
        className={styles["progress-bar"]}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default SliderCarousel;
