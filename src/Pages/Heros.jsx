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
                      <h2>{heros.view}</h2>
                      <p>{heros.Text}</p>
                    </div>
                  </div>
                ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}
