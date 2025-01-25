import Slider from './Components/Slider'
import Businessaccountpages from './Pages/Businessaccountpages'
import Globalaccounts from './Pages/Globalaccounts'
import Heros from './Pages/Heros'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Heros />
            <Globalaccounts />
          </>
        } />
        <Route path="/businessaccount" element={<Businessaccountpages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App