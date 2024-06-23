import {useEffect, useState} from "react"
import Background from './Components/Background/background'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TrekkingPackage from "./Components/package/TrekkingPackage";


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
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <TrekkingPackage/>
    </div>
  )
}

export default App