import "./About.css";
import { assets } from "../../assets/asset";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="img-box">
          <img src={assets.profile} alt="" id="about-img" />
        </div>

        <div className="about-info">
          <h2>ABOUT ME</h2>

          <p>
            Passionate software developer with expertise in web development,
            proficient in both frontend and backend technologies. 💼 Skills &
            Expertise: Frontend: HTML, CSS, JavaScript, React.js, Vue.js
            Backend: Node.js, Express.js, Django Databases: SQL, NoSQL (MongoDB)
            Tools: Git, Docker, AWS 🌐 Interests: Keen on exploring new
            technologies, contributing to open-source projects, and sharing
            knowledge with the developer community.
          </p>

          <div className="btns">
            <button className="btn hire">HIRE ME</button>
            <button className="btn resume">RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
