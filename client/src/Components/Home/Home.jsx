import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
const Home = () => {
  return (
    <div className='home-section'>
      <Navbar />
<div className='animation-grid-section'>

</div>
      <div className='home-box' >
        <h2 > If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you. </h2>
        <h3> NO MATTER WHAT IT TAKES! </h3>
        <div  className='home-box-content'>
          <div >
            <img alt='box1' src="https://files.codingninjas.in/boxicon1-9659.svg" />
            <div > Content designed by IIT &amp; Stanford alumni  </div>
          </div>
          <div >
            <img alt='box2' src="https://files.codingninjas.in/boxicon2-9658.svg" />
            <div > Instant 1:1 doubt resolution </div>
          </div>
          <div >
            <img alt='box3' src="https://files.codingninjas.in/boxicon3-9657.svg" /><div> Practical learning with 100+ problems &amp; 10+ projects in each course </div></div></div>
      </div>
      <div className='section-title'>14,000+ CODING NINJAS TO INSPIRE YOU</div>
    </div>
  )
}

export default Home