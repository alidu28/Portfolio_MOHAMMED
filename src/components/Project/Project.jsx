import { Link } from "react-router-dom";
import { assets } from "../../assets/asset";
import "./Project.css";

function Project() {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <h1>PORTFOLIO</h1>

        <ul>
          <Link className="project-list">
          <li>Mobile App</li>
          <li>Website</li>
          <li>Desktop</li>
          <li>Other Project</li>
          </Link>
        </ul>

        <div className="projects-contain">
          <div className="project">
            <div className="pro-content">
              <h2>PROJECT 1</h2>
              <h3>Dating Mobile App Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit ipsa facere cum perspiciatis nesciunt corporis iusto culpa consectetur. Rem temporibus voluptatum veniam sequi ducimus officia nihil eum dolores dolorem repudiandae itaque dolor, nesciunt consequatur voluptatem est non nulla laborum molestias sint explicabo ipsam quo repellendus in dicta. Voluptatum, nisi!
              </p>
              <h4>--&gt; Read More</h4>
            </div>

            <div className="pro-img">
              <img src={assets.ayesha} alt="" />
            </div>
          </div>

          <div className="project">
            <div className="pro-content even">
              <h2>PROJECT 2</h2>
              <h3>E-commence Mobile App Design</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit ipsa facere cum perspiciatis nesciunt corporis iusto culpa consectetur. Rem temporibus voluptatum veniam sequi ducimus officia nihil eum dolores dolorem repudiandae itaque dolor, nesciunt consequatur voluptatem est non nulla laborum molestias sint explicabo ipsam quo repellendus in dicta. Voluptatum, nisi!
              </p>
              <h4>--&gt; Read More</h4>
            </div>

            <div className="pro-img">
              <img src={assets.ticket_flight} alt="" />
            </div>
          </div>

          <div className="project">
            <div className="pro-content">
              <h2>PROJECT 3</h2>
              <h3>Fitness Mobile App Design</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit ipsa facere cum perspiciatis nesciunt corporis iusto culpa consectetur. Rem temporibus voluptatum veniam sequi ducimus officia nihil eum dolores dolorem repudiandae itaque dolor, nesciunt consequatur voluptatem est non nulla laborum molestias sint explicabo ipsam quo repellendus in dicta. Voluptatum, nisi!
              </p>
              <h4>--&gt; Read More</h4>
            </div>

            <div className="pro-img">
              <img src={assets.travel_app} alt="" />
            </div>
          </div>

          <div className="project">
            <div className="pro-content even">
              <h2>PROJECT 4</h2>
              <h3>Modelling Mobile App Design</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit ipsa facere cum perspiciatis nesciunt corporis iusto culpa consectetur. Rem temporibus voluptatum veniam sequi ducimus officia nihil eum dolores dolorem repudiandae itaque dolor, nesciunt consequatur voluptatem est non nulla laborum molestias sint explicabo ipsam quo repellendus in dicta. Voluptatum, nisi!
              </p>
              <h4>--&gt; Read More</h4>
            </div>

            <div className="pro-img">
              <img src={assets.travel_mobile} alt="" />
            </div>
          </div>
        </div>
        <button className="btn view">View all</button>
      </div>
    </div>
  );
}
export default Project;
