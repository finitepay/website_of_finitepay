import connectdata, { headerlogo } from "../Data/herosdata"
import { Link } from "react-router-dom"


export default function Heros() {
  return (
    <div className="herosBody">
      <div className="max-w-screen-2xl mx-auto">
       <div className="heros-main-content flex justify-between items-center pt-7">
         <div className="">
            <h1 className="header-text text-primaryText text-4xl font-extrabold">FinitePay</h1>
         </div>

         {/* Call to action button */}
         <div className="button-for-action flex justify-between items-center gap-10 ">
              <button className="button border border-secondaryColor p-2 w-[200px] rounded-full text-white">Personal Account</button>
              <Link to="/businessaccount">
                  <button className="button border border-secondaryColor p-2 w-[200px] rounded-full text-white">Business Account</button>
              </Link>
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

      {/* Our payer mananger...*/}
      <div className="payer-manager">
        {
          headerlogo.map((heros) => (
            <div key={heros.id} className="heros-card-logo">
                <img src={heros.logo} alt={heros.alt} />
            </div>
          ))    
        }
      </div>
      </div>
    </div>
  )
}
