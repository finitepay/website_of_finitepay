import { global, howitworks } from "../Data/herosdata";

export default function Globalaccounts() {
  return (
    <div className="globalaccountsBody">
      <div className="blobalaccounts-main-content">
        {/* the content main...*/}
        <div className="globalaccounts-content">
          {global.map((globalaccounts) => (
            <div key={globalaccounts.id} className="globalaccounts-card">
              <div className="globalaccounts-card-image">
                <img src={globalaccounts.logo} alt={globalaccounts.alt} />
              </div>
              <div className="globalaccounts-card-details">
                <h2>{globalaccounts.title}</h2>
                <p>{globalaccounts.Text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero details  and client details*/}
      <div className="how-it-works-container">
        <div className="how-it-works-content">
          <h2>How it works</h2>
          <div className="how-it-works-paragraph">
            <p>
              Setting up your FinitePay account is quick and easy, with all
              transactions secured to give you peace of mind.
            </p>
          </div>
        </div>

        {/* Add the rest of your code of how it works */}
        <div className="how-it-works-object-container">
            {
                howitworks.map((howitworks) => (
                    <div key={howitworks.id} className="how-it-works-object">
                        <div className="how-it-works-object-image">
                            <img src={howitworks.ImggetData} alt={howitworks.alt} />
                        </div>
                        <div className="how-it-works-object-details">
                            <h2>{howitworks.title}</h2>
                            <p>{howitworks.Text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>

      {/* adding the of  */}
    </div>
  );
}
