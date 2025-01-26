import { headerlogo } from '../Data/herosdata'

export default function Logopartner() {
  return (
    <div className='bg-[#E7E9EE] logo-hero-responsive'>
       <div className="payer-manager flex justify-center items-center gap-10 ">
        {
          headerlogo.map((heros) => (
            <div key={heros.id} className="heros-card-logo">
                <img className='w-[150px] ' src={heros.logo} alt={heros.alt} />
            </div>
          ))    
        }
      </div>
    </div>
  )
}
