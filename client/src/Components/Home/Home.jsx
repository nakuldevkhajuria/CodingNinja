
import { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
const Home = () => {
  const typewriterElement = useRef(null);

  useEffect(() => {
    // Define the TxtType class
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        const that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => {
          that.tick();
        }, delta);
      }
    }

    // Initialize the typewriter effect
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);

  return (
    <div className='home-section'>
      <Navbar />
      <div className='animation-grid-section'>
        <div className="animation-grid-container">
          <div className="animation-grid-content">
            <div className='animation-grid-content-1' >
             
                <div >
                  <h1>
                    <div

                      className="typewrite"
                      data-period="2000"
                      data-type='["Chasing Jobs? Let the Job chase you.", "World has enough coders", "Be more than a coder"]'
                      ref={typewriterElement}
                    >
                      <span className="wrap"></span>
                    </div>
                  </h1>

                
                <h1>Be a Coding Ninja</h1>
              </div>
              <div > 50,000 Students from 300 colleges have trusted us </div>
              <div>
                <button>
                  <span ><span>Explore Our Programs</span></span>

                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='home-box-container'>
      <div className='home-box' >
        <h2 > If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you. </h2>
        <h3> NO MATTER WHAT IT TAKES! </h3>
        <div className='home-box-content'>
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
      </div></div>
      <div className='section-title'>14,000+ CODING NINJAS TO INSPIRE YOU</div>
    </div>
  )
}

export default Home