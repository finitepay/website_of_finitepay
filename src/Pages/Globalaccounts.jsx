import { global, howitworks, safety } from "../Data/herosdata";

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

      {/* adding the part of safety in this code.... */}
      <div className="safety-container">
      <div className="safety-content">
          <h2>YOUR SAFETY COMES FIRST</h2>
          <div className="safety-paragraph">
            <p>
            From encryption to fraud detection, your transactions are safe and secure, whether you&apos;re sending money or managing your business.
            </p>
          </div>
        </div>
      <div className="safetyness-content">
          {safety.map((safety) => (
            <div key={safety.id} className="safety-card">
              <div className="safety-card-image">
                <img src={safety.ImggetData} alt={safety.alt} />
              </div>
              <div className="safety-card-details">
                <h2>{safety.title}</h2>
                <p>{safety.Text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Adding a sending money section */}
      <div className="white-by-default"></div>
      <div className="sending-money-container">
       <div className="sending-money-first-contenaire">
        <div className="sending-money-content-image">
                <img src="https://images.pexels.com/photos/30149856/pexels-photo-30149856/free-photo-of-cozy-workspace-with-coffee-and-laptop-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sending Money Image" />
        </div>
        </div>

        <div className="sending-money-second-contenaire">
            <div className="sending-content-details">
                <div className="send-money-h2">
                <h2>SEND MONEY BACK HOME </h2>
                <h2>WITH EASE</h2>
                </div>

                <div className="sending-money-paragraph">
                    <p>Sending money to your family back home has never been easier. Whether it’s supporting loved ones in Nairobi or Lagos, FinitePay makes it quick and affordable to transfer funds wherever you are.</p>
                    <p>With great exchange rates and low fees, you can send money in a few clicks and know that it’ll reach home fast and securely.</p>
                </div>
            </div>
        </div>
        <div className="default-green"></div>
      </div>
    </div>
  );
}
