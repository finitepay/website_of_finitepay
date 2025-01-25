import { happyClient } from "../Data/herosdata";


export default function Slidercarousel() {
  return (
    <div className="slider-happy-clients">
        <div className="slider-happy-clients-content">
            {
                happyClient.map((happyClient) => (
                    <div key={happyClient.id} className="slider-happy-clients-card">
                      <div className="slider-happy-clients-card-image">
                         <img src={happyClient.image} alt={happyClient.alt} />
                      </div>
                        <div className="">
                        <h2>{happyClient.name}</h2>
                        <p>{happyClient.Location}</p>

                       <div className="">
                          <p>{happyClient.Text}</p>
                       </div>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
