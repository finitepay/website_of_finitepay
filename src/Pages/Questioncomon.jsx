import { commonquestion } from "../Data/herosdata";

export default function Questioncomon() {
  return (
    <div className="questioncomonBody">
      <div className="questioncomon-main-content"></div>
      {/* the content main...*/}
      <div className="questioncomon-content">
        {commonquestion.map((commonquestion) => (
          <div key={commonquestion.id} className="questioncomon-card">
            <div className="questioncomon-card-text">
              <h2>{commonquestion.title}</h2>
              <p>{commonquestion.Text}</p>
            </div>
            <div className="questioncomon-card-details">
              <div className="questioncomon-card-image">
               {commonquestion.Icons}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
