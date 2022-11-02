import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from 'react-router-dom'
import { Logo } from "../components/index";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> app
          </h1>
          <p>
            I'm baby wolf gochujang sus, slow-carb hot chicken drinking vinegar
            taiyaki health goth typewriter forage vexillologist chillwave edison
            bulb jean shorts truffaut.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="jobhunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
