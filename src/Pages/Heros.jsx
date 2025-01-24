
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
    </div>
  )
}
