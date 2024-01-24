import "../styles/onboard.css";
import check from '../assets/Check icon.svg'
import img from '../assets/img.svg'

function Onboard() {
  return (
    <div className="onboarding">


      <div className="onboard-container">
        <div className="onboard">
            
          <h3 className="h3">Ready to clear the path to perfect communication</h3>

          <ul>
            <li>
              <img src={check} alt="" />
              30 days free trial
            </li>
            <li>
              <img src={check} alt="" />
              Cancel at any time
            </li>
            <li>
              <img src={check} alt="" />
              Access to all features
            </li>
            <li>
              <img src={check} alt="" />
              Peronalized onboarding
            </li>
          </ul>

        </div>

        <div className="onboard-btn">
          <button style={{border: '1px solid #98A2B3'}}>Talk to sales</button>
          <button style={{color: '#fff', backgroundColor:'#175cd3'}}>Start your free trial</button>
        </div>

      </div>

      <div className="img-container">
        <img src={img} alt="" />
      </div>


    </div>
  );
}
export default Onboard;
