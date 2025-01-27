import Slider from './Components/Slider'
import Businessaccountpages from './Pages/Businessaccountpages'
import Globalaccounts from './Pages/Globalaccounts'
import Heros from './Pages/Heros'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logopartner from './Pages/Logopartner'
import Questioncomon from './Pages/Questioncomon'
import Footer from './Pages/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Heros />
            <Logopartner />
            <Globalaccounts />
            <Questioncomon />
            <Footer />
          </>
        } />
        <Route path="/businessaccount" element={<Businessaccountpages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App