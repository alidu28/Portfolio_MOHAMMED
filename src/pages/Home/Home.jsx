import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Project from "../../components/Project/Project"
import Services from "../../components/Services/Services"
import Experience from "../../components/Experience/Experience"
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Services />
      <Experience />
      <Footer />
    </div>
  ) 
}
export default Home