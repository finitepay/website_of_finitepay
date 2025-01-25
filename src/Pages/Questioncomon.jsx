import { useState } from "react";
import { commonquestion } from "../Data/herosdata";

export default function Questioncomon() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="questioncomonBody">
      <div className="questioncomon-main-content">
        <h1 className="questioncomon-title">Frequently Asked Questions</h1>
        <p className="questioncomon-subtitle">
          Click on a question to reveal the answer!
        </p>
      </div>
      <div className="questioncomon-content">
        {commonquestion.map((question, index) => (
          <div key={question.id} className="questioncomon-card">
            <div
              className="questioncomon-card-header"
              onClick={() => toggleText(index)}
            >
              <h2>{question.title}</h2>
              <button className="toggle-button">
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            {activeIndex === index && (
              <div className="questioncomon-card-text">
                <p>{question.Text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
