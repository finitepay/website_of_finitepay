import connectdata from "../Data/herosdata"


export default function Heros() {
  return (
    <div className="herosBody">
       <div className="heros-main-content">
         <div className="">
            <h1 className="header-text">FinitePay</h1>
         </div>

         {/* Call to action button */}
         <div className="button-for-action">
              <button className="button">Personal Account</button>
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
        </div>
      </div>
    </div>
  )
}
