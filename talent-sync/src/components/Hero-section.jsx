import "../styles/hero-section.css";
import ai from "../assets/Frame 10.svg";
import grid from "../assets/Frame 25.svg";
import avatars from "../assets/Avatar group.svg";
import stars from "../assets/stars.svg";

function Herosection() {
  return (
    <div className="hero-section">
      <div className="call-section">
        <div className="call-section-header">
          <h1>Uniting the world one video at a time</h1>
          <p>
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>
        <div className="free-trial">
          <button>Start your free trial</button>
          <div className="ai-div">
            <img src={ai} alt="" />
            <a href="">Discover AI assistant</a>
          </div>
        </div>

        <div className="reviews">
          <div>
            <img src={avatars} alt="" />
          </div>
          <div>

            <div className="rev">
              <img src={stars} alt="" />
              <p>5.0</p>
            </div>

            <div className="no-rev">from 3000+ reviews</div>
          </div>
        </div>
      </div>

      <div>
        <img src={grid} alt="" />
      </div>
    </div>
  );
}
export default Herosection;
