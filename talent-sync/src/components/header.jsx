/* eslint-disable react/prop-types */
import dropdown from "../assets/chevron-down.svg";
import logo from "../assets/Frame 18.svg";
import "../styles/Header.css";
import { useState } from "react";

function Dropdowndiv({ dropDownObject, objectItem }) {
  return (
    <div className="dropdown-div">
      <ul>
        {dropDownObject[objectItem].map((item, index) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Header() {
  const [mouseOver, setMouseOver] = useState({
    products: false,
    solutions: false,
    resources: false,
  });

  const dropDownObject = {
    products: [
      "Basic Plan",
      "Pro Plan",
      "Enterprise Plan",
      "APi Integration",
      "Custom Solutions",
    ],
    solutions: [
      "Resource Collaboration",
      "Virtual Meetings",
      "Training Sessions",
      "Custom Integration",
      "Webinars and Events",
    ],
    resources: [
      "Knowledge Base",
      "Video Tutorials",
      "Community Forum",
      "Customer support",
      "Documentation",
    ],
  };

  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="list-items">
        <ul>
          <li
            onMouseOver={() => {
              setMouseOver({ ...mouseOver, products: true });
            }}
            onMouseLeave={() => setMouseOver({ ...mouseOver, products: false })}
          >
            <a href="#">Products</a>
            <img src={dropdown} alt="" />
            {mouseOver.products && (
              <Dropdowndiv
                dropDownObject={dropDownObject}
                objectItem="products"
              />
            )}
          </li>
          <li
            onMouseOver={() => setMouseOver({ ...mouseOver, solutions: true })}
            onMouseLeave={() =>
              setMouseOver({ ...mouseOver, solutions: false })
            }
          >
            <a href="#">Solutions</a>
            <img src={dropdown} alt="" />
            {mouseOver.solutions && (
              <Dropdowndiv
                dropDownObject={dropDownObject}
                objectItem="solutions"
              />
            )}
          </li>
          <li
            onMouseOver={() => setMouseOver({ ...mouseOver, resources: true })}
            onMouseLeave={() =>
              setMouseOver({ ...mouseOver, resources: false })
            }
          >
            <a href="#">Resources</a>
            <img src={dropdown} alt="" />
            {mouseOver.resources && <Dropdowndiv dropDownObject={dropDownObject} objectItem="resources" />}
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#fff", border: "1px solid #9ba2b3" }}
        >
          Talk to sales
        </button>
        <button style={{ backgroundColor: "#175CD3", color: "#ffffff" }}>
          sign up for free
        </button>
      </div>
    </div>
  );
}
export default Header;
