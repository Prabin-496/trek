// import React from 'react'
import '../Background/Background.css'
import vid from '../../assets/vid.mp4'
import mmm from '../../assets/mmm.jpg'
import him from '../../assets/him.jpg'
import rular from '../../assets/rular.jpg'


const Background = (playStatus,heroCount) => {


  if (playStatus){
      return(
          <video className='background' autoPlay loop muted>
            <source src={vid} type='video/mp4'/>
          </video>
  )
 }
 else if(heroCount===0)
  {
    return <img src={him} className='background' alt=""/>
  }
  else if(heroCount===1)
  {
    return <img src={rular} className='background' alt=""/>
  }
  else if(heroCount===2)
  {
    return <img src={mmm} className='background' alt=""/>
  }


}
export default Background
