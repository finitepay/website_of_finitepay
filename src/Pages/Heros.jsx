import connectdata from "../Data/herosdata"
import { Link } from "react-router-dom"
import mbplusimg from '../Photo/Vector.svg'

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
              <button className="button border border-secondaryColor p-2 w-[200px] text-sm font-medium rounded-full text-slate-800">Personal Account</button>
              <Link to="/businessaccount">
                  <button className="button border border-secondaryColor p-2 w-[200px] text-sm font-medium rounded-full text-slate-800">Business Account</button>
              </Link>
         </div>
       </div> 
       
       {/* Hero details  and client details*/}
      <div className="heros-details-content mt-[5%] flex justify-between items-start w-full">
        {/* First container design */}
        <div className="first-container">
            <div className="heros-card-container flex items-center gap-5">
            {
                connectdata.map((heros) => (
                  <div key={heros.id} className="heros-card flex items-center">
                    <div className="heros-card-image w-5 flex items-center justify-center">
                      <img src={heros.icons} alt={heros.alt} />
                    </div>
                    <div className="heros-card-details flex items-center justify-center text-primaryText gap-2">
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

            <div className="flex flex-col gap-5 justify-center pb-5">
                <h1 className="header-text-heors text-headertext text-5xl font-extrabold">A WALLET BUILT FOR<br className="hidden md:hidden sm:block"/> AFRICA,<br className="lg:block md:hidden sm:block"/> READY FOR 
                THE WORLD</h1>

                <div className="hearos-line-paragraph text-headertext text-base">
                    <p>Send, receive, and save money across borders with<br className="hidden md:hidden sm:block"/> ease</p>
                </div>

                <div className="hearos-line-paragraph text-headertext text-base">
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
            <div className="second-container-image">
                <img  className="w-[840px] h-[540px] object-fill"  src={mbplusimg} alt="Group_81" />
            </div>
        </div>
      </div>

      {/* Our payer mananger...logo*/}
      </div>
    </div>
  )
}
