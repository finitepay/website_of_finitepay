import { getgrowing } from "../Data/herosdata";
import ImGgood from "../Photo/Vectorminers.svg"


export default function Extensioncomponents() {
  return (
    <div className="extensioncomponentsBody">
        {/* the content main...*/}
      <div className="extensioncomponents-content"> 
        <div className="extensioncomponents-card-h1">
          <h1>A TOOL THAT ACTUALLY SUPPORTS<br /> YOUR GROWTH</h1>
        </div>

        <div className="extensioncomponents-card-main">
            <div className="extensioncomponents-card-one">
           
            <div className="extensioncomponents-card-one-pargraph">
               <p>FinitePay isn’t just another payment platform we are your growth partner.</p>
               <p>Whether you&apos;re an individual managing your finances or a business scaling up, our features are designed to support your financial journey. From seamless transactions to powerful insights, we’re here to help you succeed, every step of the way.</p>
            </div>

            <div className="extensioncomponents-card-one-line">
                {
                getgrowing.map((grow) => (
                    <div key={grow.id} className="extensioncomponents-card-one-line-content">
                        <div className="extensioncomponents-card-one-line-image">
                           <div>
                             <img src={grow.ImggetData} alt={grow.alt} />  
                           </div>
                        </div>
                    <div className="extensioncomponents-card-one-line-text">
                        <div>
                        <h1>{grow.title}</h1>
                        </div>
                        <div className="">
                        <p>{grow.Text}</p>
                        </div>
                    </div>
                    </div>
                ))
                }
            </div>

            </div>

            {/* the second card image */}
            <div className="growth-img-container-image">
                <img src={ImGgood} alt="Sending Money Image" />
        </div>
        </div>
      </div>
    </div>
  )
}
