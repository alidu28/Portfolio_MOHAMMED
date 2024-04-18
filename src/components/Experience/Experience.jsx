import "./Experience.css"
import { assets } from "../../assets/asset";

function Experience() {
  return (
    <div className="experience">
        <div className="experience-contain">
            <h1>EXPERIENCE</h1>

            <div className="experience-imgs">
              <div>
              <img src={assets.html_logo} alt="" />
                <p>HTML5</p>
              </div>

              <div>
              <img src={assets.css_logo} alt="" />
                <p>CSS3</p>
              </div>

              <div>
              <img src={assets.js_logo} alt="" />
                <p>JavaScript</p>
              </div>
              <div>
              <img src={assets.react_logo} alt="" />
                <p>React.JS</p>
              </div>

              <div>
              <img src={assets.nodejs_logo} alt="" />
                <p>Node.JS</p>
              </div>

              <div>
              <img src={assets.express_logo} alt=""/>
                <p>Express.JS</p>
              </div>

              <div>
              <img src={assets.mongodb_logo} alt="" />
                <p>MongoDB</p>
              </div>
              
              <div>
              <img src={assets.tailwind_logo} alt="" />
                <p>Tailwind</p>
              </div>

              <div>
              <img src={assets.php_logo} alt="" />
                <p>PHP</p>
              </div>

              <div>
              <img src={assets.python_logo} alt="" />
                <p>Python</p>
              </div>

              <div>
              <img src={assets.mysql_logo} alt="" />
                <p>MySQL</p>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Experience;