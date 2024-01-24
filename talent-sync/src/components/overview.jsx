import "../styles/overiew.css";
import logo from "../assets/Frame 18.svg";
import apps from '../assets/playstore.svg'
import plays from '../assets/appstore.svg'

function Overview() {
  return (
    <div className="overview-container">
      <div className="overview">
        <img src={logo} alt="" style={{width: '152px', height: '29px'}}/>
        <p>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className="services">
        <div className="services-list">
          <ul>
            <li className="services-header"><a href="">Products</a></li>
            <li><a href="">Overview</a></li>
            <li>F<a href="">eatures</a></li>
            <li><a href="">Solutions</a></li>
            <li><a href="">Tutorials</a></li>
            <li><a href="">Pricing</a></li>
          </ul>
        </div>
        <div className="services-list">
          <ul>
            <li className="services-header"><a href="">Company</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="services-list">
          <ul>
            <li className="services-header"><a href="">Resources</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Help cente</a>r</li>
            <li><a href="">Tutorial</a></li>
            <li><a href="">Support</a></li>
          </ul>
        </div>
        <div className="services-list">
          <ul>
            <li className="services-header"><a href="">Legal</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">Licences</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div  className="services-list">
            <ul>
                <li style={{color: '#004EEB'}}>Get the app</li>
                <li><img src={apps} alt="" /></li>
                <li><img src={plays} alt="" /></li>
            </ul>
        </div>
      </div>


    </div>
  );
}
export default Overview;
