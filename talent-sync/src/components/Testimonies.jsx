import "../styles/testimonies.css";
import shopify from "../assets/Shopify.com svg.svg";
import foward from "../assets/foward.svg";
import backward from "../assets/backward.svg";
import avatar from "../assets/Avatar.svg";
import gridimg from "../assets/Contents.svg";
import stars from "../assets/stars.svg";

function Testimonies() {
  return (
    <div className="testimonies-container">
      <div className="testifier">
        <img src={shopify} alt="" style={{ width: "112px", height: "32px" }} />
        <img src={stars} alt="" style={{ width: "112px", height: "32px" }} />
        <p>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className="testifier-credentials">
          <div className="testifier-description">
            <img src={avatar} alt="" />
            <div className="testifier-details">
              <h5>Sarah Thompson</h5>
              <p>Project Manager, shopify</p>
            </div>
          </div>
          <div className="carousel-btn">
            <a href="">
              <img src={foward} alt="" />
            </a>
            <a href="">
              <img src={backward} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <img src={gridimg} alt="" />
      </div>
    </div>
  );
}
export default Testimonies;
