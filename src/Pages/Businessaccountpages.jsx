import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import connectdata, { africancountry, getgrowing, safetyTow } from "../Data/herosdata";
import SlaverHear from "../images/LayerHear1.png"

export default function Businessaccountpages() {

    if(africancountry.length === 8){
        africancountry.push({
                id: 9,
                name : "Tanzania",
                flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        })
    } 

  return (
    <div className="">
        <Slider />
        {/* Adding second heros section */}
        <div className="herosBody">
       <div className="heros-main-content">
         <div className="">
            <h1 className="header-text">FinitePay</h1>
         </div>

         {/* Call to action button */}
         <div className="button-for-action">
         <Link to="/">
              <button className="button">Personal Account</button>
            </Link> 
                  <button className="button">Business Account</button>
         </div>
       </div> 
       
       {/* Hero details  and client details*/}
      <div className="heros-details-content">
        {/* First container design */}
        <div className="first-container">
            <div className="heros-card-container">
            {
                connectdata.map((heros) => (
                  <div key={heros.id} className="heros-card">
                    <div className="heros-card-image">
                      <img src={heros.icons} alt={heros.alt} />
                    </div>
                    <div className="heros-card-details">
                    <div className="heros-card-image-two">
                      <img src={heros.stars} alt={heros.alt} />
                    </div>
                     <div className="heros-card-text">
                        <p>{heros.view}</p>
                        <p>{heros.Text}</p>
                     </div>
                    </div>
                  </div>
                ))
            }
            </div>

            <div className="">
                <h1 className="header-text-heors">A WALLET BUILT FOR<br /> AFRICA, READY FOR <br />
                THE WORLD</h1>

                <div className="hearos-line-paragraph">
                    <p>Send, receive, and save money across borders with<br /> ease</p>
                </div>

                <div className="hearos-line-paragraph">
                    <p>Designed for Africa, our wallet lets you manage<br /> your finances in multiple currencies, all while<br/> staying connected back home.</p>
                </div>
            </div>
            <div className="button-for-action-one">
              <button className="button">Open a personal account</button>
              <button className="button">Login</button>
         </div>
        </div>

        {/* Second container design */}
        <div className="second-container">
            <div className="second-container-image">
                <img src="https://images.pexels.com/photos/30149856/pexels-photo-30149856/free-photo-of-cozy-workspace-with-coffee-and-laptop-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Group_81" />
            </div>
        </div>
      </div>
    </div>

    {/* Adding third section */}
    <div className="african-wallet-container">

        <div className="">
            <div className="african-wallet-content-h1">
                <h1>Currently available in 38 African countries</h1>
            </div>
            <div className="african-wallet-content-p">
                <p>Whether you’re in Kenya, Nigeria, South Africa, or anywhere in between, you can count on us to provide fast, secure, and affordable financial services—no matter where you are.</p>
            </div>
        </div>
        
        {/* Second container design */}
        <div className="herosing-card-container">
            {
                africancountry.map((heros) => (
                  <div key={heros.id} className="herosing-card">
                    <div className="herosing-card-image">
                      <img src={heros.flag} alt={heros.name} />
                    </div>
                  </div>
                ))
            }
        </div>
    </div>

    {/* A TOOL THAT ACTUALLY SUPPORTS YOUR GROWTH */}
    <div className="growth-container">
        <div className="growth-content">
            <h1>A TOOL THAT ACTUALLY SUPPORTS YOUR GROWTH</h1>
            
            <div className="growth-content-p">
               <p>Our platform is designed to help you grow your business, whether you’re just starting out or you’re already a seasoned pro. With our easy-to-use tools, you can manage your finances, track your sales, and connect with customers—all in one place.</p>
            </div>
        </div>

        {/* Second container design */}
        <div className="growth-card-container">
        <div className="growth-card-container-object">
            {
                getgrowing.map((howitworks) => (
                    <div key={howitworks.id} className="how-it-works-object-growth">
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
        <div className="growth-img-container">
        <div className="growth-img-container-image">
                <img src="https://images.pexels.com/photos/30149856/pexels-photo-30149856/free-photo-of-cozy-workspace-with-coffee-and-laptop-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sending Money Image" />
        </div>
        </div>
        </div>
    </div>

    {/* AFFORDABLE AND SAFE  24/7 Support*/}

    <div className="affordable-container-main">
       <div className="affordable-contenaire">

        <div className="">
            <img src={SlaverHear} alt="Sending Money Image" />
        </div>
            <div className="">
                <h1>24/7 Support</h1>
            </div>
        </div>

        <div className="affordable-support"></div>

    <div className="">
        <div className="safety-container-new">
      <div className="safety-content">
          <h2>SERIOUS ABOUT SECURITY</h2>
          <div className="safety-paragraph">
            <p>
            From encryption to fraud detection, your transactions are safe and secure, whether you&apos;re sending money or managing your business.
            </p>
          </div>
        </div>
      <div className="safetyness-content">
          {safetyTow.map((safety) => (
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
    </div>

        <div className=""></div>
    </div>
    </div>
  )
}
