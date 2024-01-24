import "../styles/companies.css";
import marvel from "../assets/Marvel svg.svg";
import dropbox from "../assets/Dropbox svg.svg";
import autmoatic from "../assets/Automattic svg.svg";
import coinbase from "../assets/Coinbase svg.svg";
import intercom from "../assets/Intercom svg.svg";
import shopify from "../assets/Shopify.com svg.svg";

function Companies() {
  return (
    <div className="companies-container">
      <div className="action">
        Join 1,500+ companies already video conferencing the ClearLink way
      </div>
      <div className="companies-list">
        <ul>
          <li>
            <a href=""><img src={shopify} alt="" /></a>
          </li>
          <li>
            <a href=""><img src={coinbase} alt="" /></a>
          </li>
          <li>
            <a href=""><img src={dropbox} alt="" /></a>
          </li>
          <li>
            <a href=""><img src={intercom} alt="" /></a>
          </li>
          <li>
            <a href=""><img src={marvel} alt="" /></a>
          </li>
          <li>
            <a href=""><img src={autmoatic} alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Companies;
