import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import connectdata, { africancountry, business, getgrowing, safetyTow } from "../Data/herosdata";
import SlaverHear from "../images/LayerHear1.png"
import SliderCarousel from "./Slidercarousel";
import Extensioncomponents from "./Extensioncomponents";

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
   <div className="herosBodysecond">
      <div className="max-w-screen-2xl mx-auto">
       <div className="heros-main-content2  pt-7">
         <div className="">
            <h1 className="header-text text-primaryText text-4xl font-extrabold">FinitePay</h1>
         </div>

         {/* Call to action button */}
         <div className="button-for-actionsecond flex justify-between items-center gap-10 ">
              <Link to="/">
              <button className="button border border-secondaryColor p-2 w-[200px] text-sm font-medium rounded-full text-slate-800">Personal Account</button>
              </Link>
              <Link to="/businessaccount">
                  <button className="button border border-secondaryColor p-2 w-[200px] text-sm font-medium rounded-full text-slate-800">Business Account</button>
              </Link>
         </div>
       </div> 
       
       {/* Hero details  and client details*/}
      <div className="heros-details-content mt-[5%] flex flex-row-reverse justify-between items-start w-full">
        {/* First container design */}
        <div className="first-container">
            <div className="heros-card-containersecond flex items-center gap-5">
            {
                connectdata.map((heros) => (
                  <div key={heros.id} className="heros-card flex items-center">
                    <div className="heros-card-image w-5 flex items-center justify-center">
                      <img src={heros.icons} alt={heros.alt} />
                    </div>
                    <div className="heros-card-detailsecond flex items-center justify-center text-primaryText gap-2">
                      <div className="text-xs">
                        <p>{heros.view}</p>
                      </div>
                    <div className="heros-card-image-two w-5">
                      <img src={heros.stars} alt={heros.alt} />
                    </div>
                     <div className="heros-card-text text-xs">
                        <p>{heros.Text}</p>
                     </div>
                    </div>
                  </div>
                ))
            }
            </div>

            <div className="flex flex-col gap-5 justify-center pb-5 ">
                <h1 className="header-text-heors text-headertext text-5xl font-extrabold wallcontainer">A WALLET BUILT FOR<br className="hidden md:hidden sm:block"/> AFRICA,<br className="lg:block md:hidden sm:block"/> READY FOR 
                THE WORLD</h1>

                <div className="hearos-line-paragraph text-headertext text-base wallcontainer">
                    <p>Send, receive, and save money across borders with<br className="hidden md:hidden sm:block"/> ease</p>
                </div>

                <div className="hearos-line-paragraph text-headertext text-base wallcontainer">
                    <p>Designed for Africa, our wallet lets you manage<br className="hidden md:hidden sm:block"/> your finances in multiple currencies, all <br className="lg:block md:hidden sm:block"/> while staying connected back home.</p>
                </div>
            </div>
            <div className="button-for-action-one flex items-center gap-5 pb-5">
              <button className="button border border-secondaryColor bg-secondaryColor p-2 w-[250px] text-sm font-medium rounded-xl text-white">Open a personal account</button>
              <button className="button border border-secondaryColor p-2 w-[100px] text-sm font-medium rounded-xl text-secondaryColor">Login</button>
         </div>
        </div>

        {/* Second container design */}
        <div className="second-container">
            <div className="second-container-image ">
                <img  className="w-[540px] h-[363px] object-fill"  src="https://images.pexels.com/photos/30149856/pexels-photo-30149856/free-photo-of-cozy-workspace-with-coffee-and-laptop-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Group_81" />
            </div>
        </div>
      </div>

      {/* Our payer mananger...logo*/}
      </div>
    </div>

    {/* Adding third section */}
    <div className="african-wallet-container">

        <div className="">
            <div className="african-wallet-content-h1">
                <h1>Currently available in 38 African countries</h1>
            </div>
            <div className="african-wallet-content-p">
                <p>Whether you’re in Kenya, Nigeria, South Africa, or anywhere in between, you can count on us to <br className="willdisplay"/> provide fast, secure, and affordable financial services—no matter where you are.</p>
            </div>
        </div>
        
        {/* Second container design */}
        <div className="herosing-card-container ">
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
    <Extensioncomponents />
    {/* Extension component */}
    <div className="growth-container">
        <div className="growth-content">
            <h1>A TOOL THAT ACTUALLY SUPPORTS YOUR GROWTH</h1>
            
            <div className="growth-content-p willdisplay">
               <p>Our platform is designed to help you grow your business, whether you’re just starting out or you’re already a seasoned pro. With our easy-to-use tools, you can manage your finances, track your sales, and connect with customers—all in one place.</p>
            </div>
        </div>

        {/* Second container design */}
    <div className="new-main-grow">
    <div className="growth-content-p">
               <p>Our platform is designed to help you grow your business, whether you’re just starting out or you’re already a seasoned pro. With our easy-to-use tools, you can manage your finances, track your sales, and connect with customers—all in one place.</p>
            </div>
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
          <div className="affordable-supporting-display">  
            <div className="affordable-supporting-h1">
              <h2>SERIOUS ABOUT SECURITY</h2>
            </div>            
                <div className="affordable-supporting"></div>
          </div>
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

    {/* WHAT MAKES FINITEPAY BUSINESS YOUR GROWTH PARTNER */}
     <div className="business-growth-partner">
            <div className="business-growth-partner-h1">
                <h1>WHAT MAKES FINITEPAY BUSINESS <br className="right-here"/> YOUR GROWTH PARTNER</h1>
            </div>
        
        <div className="business-growth-partner-content">
            {
                business.map((howitworks) => (
                    <div key={howitworks.id} className="business-growth-partner-content-card">
                        <div className="business-growth-partner-content-image">
                            <img src={howitworks.Img} alt={howitworks.alt} />
                        </div>
                        <div className="business-growth-partner-content-details">
                            <div className="">
                            <h2>{howitworks.title}</h2>
                            </div>
                            <div className="">
                            <p>{howitworks.Text}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      <div className="open-account-business">
            <div className="Finitepay-getter">
                <h1>Open a Finitepay Business Account</h1>
            </div>
      </div>
     </div>

      {/* Happy customers */}
             <div className="happy-customers-container">
                 <div className="header-text">
                     <h1 className="">TRUSTED BY PEOPLE LIKE YOU</h1>
                 </div>
     
               <div className="position-relative">
     
                <div className="happy-customers-content-paragraphe">
                     <p>Hear directly from our users who are sending money home, managing their business payments, and enjoying the simplicity of global transactions.</p>
                     <p>See why they trust us to handle their finances with ease.</p>
                 </div>
                 
                 <SliderCarousel />
               </div>
             </div>
    </div>
  )
}
