/* eslint-disable react/no-unescaped-entities */
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-contain">
        <h3>I'm a</h3>
        <h1>
            FULL STACK SOFTWARE DEVELOPER
            <div className="dot-contain">
              <div className="dot"></div>
            </div>
        </h1>
        <button className="btn prev-btn">Previous Projects</button>
    </div>
  )
}
export default Hero