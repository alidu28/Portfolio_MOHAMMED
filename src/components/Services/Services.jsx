import "./Services.css"
import { assets } from "../../assets/asset";


function Services() {
  return (
    <div className="service">
        <div className="service-content">
            <h1>SERVICES</h1>

            <div className="service-contain">
                <div className="video">
                    <div className="video-img">
                    <span>
                    <img src={assets.video} alt="" />
                    </span>
                    <h2>
                        VIDEO EDITING
                    </h2>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quis non odio veniam aut doloremque, et tempore dolores porro perspiciatis sit enim molestias illo facilis nesciunt fugit placeat voluptatem corrupti. Dicta ea rem iusto autem numquam quod, mollitia quis officia sed. Nemo quos iste tempore.
                    </p>
                </div>

                <div className="mobile">
                    <div className="mobile-img">
                    <span>
                    <img src={assets.mobile} alt="" />
                    </span>
                        <h2>
                            MOBILE APP DEVELOPMENT
                        </h2>
                    </div>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quis non odio veniam aut doloremque, et tempore dolores porro perspiciatis sit enim molestias illo facilis nesciunt fugit placeat voluptatem corrupti. Dicta ea rem iusto autem numquam quod, mollitia quis officia sed. Nemo quos iste tempore.
                    </p>
                </div>

                <div className="desktop">
                    <div className="desktop-img">
                    <span>
                    <img src={assets.desktop} alt="" />
                    </span>
                    <h2>
                        DESKTOP APP DEVELOPMENT
                    </h2>
                    </div>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quis non odio veniam aut doloremque, et tempore dolores porro perspiciatis sit enim molestias illo facilis nesciunt fugit placeat voluptatem corrupti. Dicta ea rem iusto autem numquam quod, mollitia quis officia sed. Nemo quos iste tempore.
                    </p>
                </div>

                <div className="program">
                    <div className="program-img">
                    <span>
                    <img src={assets.program} alt="" />
                    </span>
                    <h2>
                        PROGRAMMING LANGUAGES
                    </h2>
                    </div>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quis non odio veniam aut doloremque, et tempore dolores porro perspiciatis sit enim molestias illo facilis nesciunt fugit placeat voluptatem corrupti. Dicta ea rem iusto autem numquam quod, mollitia quis officia sed. Nemo quos iste tempore.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Services;