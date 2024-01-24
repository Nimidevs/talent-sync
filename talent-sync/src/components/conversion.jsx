/* eslint-disable react/no-unescaped-entities */
import "../styles/conversion.css";
import imggrid from "../assets/Rectangle 1.svg";
import vid from "../assets/video-recorder.svg";
import lock from "../assets/lock-unlocked-04.svg";
import aud from "../assets/recording-01.svg";
import calendar from "../assets/calendar.svg";

function Conversion() {
  return (
    <div className="conversion-container">
      
      <div className="conversion-header">
        <div className="subheading-container">
          <h3 className="sub-heading">The ClearLink Advantage</h3>
        </div>

        <div className="reason">
          <h2>Why choose ClearLink?</h2>
          <p>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
      </div>

      <div className="conversion-points-container">
        <div className="conversion-points">
          <div className="points">
            <div>
              <img src={vid} alt="" />
            </div>
            <div className="points-body">
              <h4>Crystal-clear HD video</h4>
              <p>
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>
          </div>
          <div className="points">
            <div>
              <img src={aud} alt="" />
            </div>
            <div className="points-body">
              <h4>Noise-canceling audio</h4>
              <p>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </div>
          </div>
          <div className="points">
            <div>
              <img src={calendar} alt="" />
            </div>
            <div className="points-body">
              <h4>Scheduling made easy</h4>
              <p>
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </p>
            </div>
          </div>
          <div className="points">
            <div>
              <img src={lock} alt="" />
            </div>
            <div className="points-body">
              <h4>Bank-grade security</h4>
              <p>
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={imggrid} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Conversion;
