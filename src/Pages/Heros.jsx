import connectdata from "../Data/herosdata";
import { Link } from "react-router-dom";
import mbplusimg from "../Photo/Vector.svg";

export default function Heros() {
  return (
    <div className="herosBody">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="heros-main-content flex flex-col lg:flex-row justify-between items-center pt-7 gap-5">
          <div>
            <h1 className="header-text text-primaryText text-4xl font-extrabold text-center lg:text-left">
              FinitePay
            </h1>
          </div>

          {/* Call to action button */}
          <div className="button-for-action flex flex-wrap justify-center lg:justify-end items-center gap-5">
            <button className="button border border-secondaryColor p-2 w-[200px] text-sm font-medium rounded-full text-slate-800">
              Personal Account
            </button>
            <Link to="/businessaccount">
              <button className="button border border-secondaryColor p-2 w-[200px] text-sm font-medium rounded-full text-slate-800">
                Business Account
              </button>
            </Link>
          </div>
        </div>

        {/* Hero details and client details */}
        <div className="heros-details-content mt-[5%] flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start w-full gap-10">
          {/* First container design */}
          <div className="first-container w-full lg:w-1/2 flex flex-col gap-5">
            <div className="heros-card-container flex flex-wrap gap-5 justify-center lg:justify-start">
              {connectdata.map((heros) => (
                <div
                  key={heros.id}
                  className="heros-card flex items-center gap-3"
                >
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
              ))}
            </div>

            <div className="flex flex-col gap-5 text-center lg:text-left">
              <h1 className="header-text-heors text-headertext text-4xl md:text-5xl font-extrabold leading-tight">
                A WALLET BUILT FOR
                <br className="hidden md:hidden sm:block" /> AFRICA,
                <br className="lg:block md:hidden sm:block" /> READY FOR THE
                WORLD
              </h1>

              <div className="hearos-line-paragraph text-headertext text-base">
                <p>
                  Send, receive, and save money across borders with
                  <br className="hidden md:hidden sm:block" /> ease
                </p>
              </div>

              <div className="hearos-line-paragraph text-headertext text-base">
                <p>
                  Designed for Africa, our wallet lets you manage
                  <br className="hidden md:hidden sm:block" /> your finances in
                  multiple currencies, all
                  <br className="lg:block md:hidden sm:block" /> while staying
                  connected back home.
                </p>
              </div>
            </div>

            <div className="button-for-action-one flex flex-wrap justify-center lg:justify-start items-center gap-5 pb-5">
              <button className="button border border-secondaryColor bg-secondaryColor p-2 w-[250px] text-sm font-medium rounded-xl text-white">
                Open a personal account
              </button>
              <button className="button border border-secondaryColor p-2 w-[100px] text-sm font-medium rounded-xl text-secondaryColor">
                Login
              </button>
            </div>
          </div>

          {/* Second container design */}
          <div className="second-container w-full lg:w-1/2 flex justify-center">
            <div className="second-container-image">
              <img
                className="w-full max-w-[500px] h-auto object-fill"
                src={mbplusimg}
                alt="Group_81"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
