import {useEffect, useState} from "react"
import Background from './Components/Background/background'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TrekkingPackage from "./Components/package/TrekkingPackage";
import Footer from "../src/Components/footer/Footer";
import Package from "../src/pages/Package";
import Contact from "../src/pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Explore the",text2:"unknown trails"},
    {text1:"Give in to",text2:"your passion"},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);
  
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
  return (
  <BrowserRouter>
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      
      <Routes>
        <Route path="/Package" element={<Package />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <TrekkingPackage/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App