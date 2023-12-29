import { createContext, useEffect, useRef, useState } from "react";

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const slidesData = [
    "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
    "https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
    "https://img.freepik.com/free-vector/realistic-composition-consist-modern-models-laptop-smartphone-with-black-glossy-screens_1284-62284.jpg?w=1480&t=st=1703775055~exp=1703775655~hmac=995598e6137a5d3c3a1c8a227039b20a3fa5d9b96bde525dc301d04a0b0cb17d",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        progressRef.current += 1;
        setProgress(progressRef.current);

        if (progressRef.current >= 100) {
          setCurrentIndex((prevIndex) =>
            prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
          );
          progressRef.current = 0;
        }
      }, 50);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoplay, slidesData.length, currentIndex]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sharedValuesAndMethods = {
    handleMouseEnter,
    handleMouseLeave,
    slidesData,
    handlePrev,
    handleNext,
    progress,
    currentIndex,
    sliderRef,
  };
  return (
    <SliderContext.Provider value={sharedValuesAndMethods}>
      {children}
    </SliderContext.Provider>
  );
};
