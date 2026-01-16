
import './App.css'
import Auctions from './assets/Components/Auctoins/Auctions'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="main-container flex text-center gap-2 bg-slate-300 p-6">
          <div className="left-container w-[70%] ">
            <Auctions></Auctions>

          </div>
          <div className="right-container w-[30%] ">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
