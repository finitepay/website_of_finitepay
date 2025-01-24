import { global } from "../Data/herosdata"


export default function Globalaccounts() {
  return (
    <div className='globalaccountsBody'>
        <div className="blobalaccounts-main-content">
            {/* the content main...*/}
            <div className="globalaccounts-content">
                {
                    global.map((globalaccounts) => (
                        <div key={globalaccounts.id} className="globalaccounts-card">
                            <div className="globalaccounts-card-image">
                                <img src={globalaccounts.logo} alt={globalaccounts.alt} />
                            </div>
                            <div className="globalaccounts-card-details">
                                <h2>{globalaccounts.title}</h2>
                                <p>{globalaccounts.Text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>      
    </div>
  )
}
