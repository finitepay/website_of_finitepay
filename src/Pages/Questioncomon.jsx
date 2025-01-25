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
      </div>
      <div className="questioncomon-content">
        {commonquestion.map((question, index) => (
          <div key={question.id} className="questioncomon-card">
            <div
              className="questioncomon-card-header"
              onClick={() => toggleText(index)}
            >
              
              <div className="dropdown-title">
              <h2>{question.title}</h2>
              </div>

             <div className="active-button">
             <button className="toggle-button">
                {activeIndex === index ? "-" : "+"}
              </button>
             </div>

            </div>
            {activeIndex === index && (
              <div className="questioncomon-card-text">
                <p>{question.Text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Add your rest of your code here */}
      <div className="">
       <div className="container-green">
             <div className="default-green"></div>
        </div>
      </div>
    </div>
  );
}
