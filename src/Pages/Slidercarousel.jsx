import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { happyClient } from "../Data/herosdata";

export default function SliderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? happyClient.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === happyClient.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container slider-happy-clients">
      <div className="slider-content">
        <button className="arrow-button left" onClick={handlePrev}>
          <FiArrowLeft />
        </button>

        <div className="slider-card ">
          <div className="slider-card-image">
            <img
              src={happyClient[currentIndex].profilePhoto}
              alt={happyClient[currentIndex].name}
            />
          </div>
          <div className="slider-card-content">
            <h3 className="slider-card-name">{happyClient[currentIndex].name}</h3>
            <p className="slider-card-location">
              {happyClient[currentIndex].Location}
            </p>
            <p className="slider-card-text ">{happyClient[currentIndex].Text}</p>
          </div>
        </div>

        <button className="arrow-button right" onClick={handleNext}>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
