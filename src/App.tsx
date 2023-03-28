import { useState } from 'react'
import {data} from './assets/car_data.js';
import HeroSection from './Components/Hero_Section';
import Products from './Components/Products.js';
import Gallery from './Components/Gallery.js';
import Services from './Components/Services.js';
import Footer from './Components/Footer.js';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeroSection />
      <Products />
      <Gallery />
      <Services />
      <Footer />
    {/* {
      data.map((elem: { image: string | undefined; })=>{
        return(<div>
          <img  src={elem.image}/>
          </div>)
      })
    } */}
    </div>
  )
}

export default App
