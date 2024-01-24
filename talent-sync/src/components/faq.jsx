/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "../styles/faq.css";
import minus from "../assets/minus-circle.svg";
import add from "../assets/plus-circle.svg";
import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
  return (
    <div
      className={isActive ? "answered-question active" : "answered-question"}
      onClick={onShow}
    >
      <div className="question">
        <h5>{title}</h5>
        {isActive ? (
          <button className="acc-btn">
            {" "}
            <img src={minus} alt="" />
          </button>
        ) : (
          <button className="acc-btn">
            {" "}
            <img src={add} alt="" />
          </button>
        )}
      </div>
      {isActive ? <p>{children}</p> : null}
    </div>
  );
}

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="faq-container">
      <div className="faq-details">
        <h4>Support</h4>
        <div className="faq-contact">
          <h3>FAQs</h3>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for?
            <a href=""> Please chat to our friendly team</a>.
          </p>
        </div>
      </div>

      <div className="questions-container">
        <Panel
          title="How many participants can join a ClearLink video conference?"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          ClearLink offers flexible meeting options. Depending on your
          subscription plan, you can host meetings with varying numbers of
          participants. Our plans are designed to accommodate small team
          collaborations and large-scale webinars, ensuring you have the right
          fit for your needs.
        </Panel>
        <Panel
          title="Can I use ClearLink on multiple devices?"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          Absolutely! ClearLink is designed to provide flexibility and
          accessibility. You can use ClearLink on multiple devices seamlessly.
          Whether you're on your computer, tablet, or smartphone, simply log in
          with your account credentials, and you'll have access to your video
          conferencing sessions across all your devices..
        </Panel>
        <Panel
          title="Is ClearLink compatible with other video conferencing platforms?"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          ClearLink is designed to enhance your video conferencing experience by
          offering a standalone solution. Currently, it operates independently
          and does not integrate directly with other video conferencing
          platforms. However, we continually explore opportunities for
          compatibility and interoperability to provide you with the best user
          experience possible.
        </Panel>
        <Panel
          title="How does ClearLink ensure the security of my video conferences?"
          isActive={activeIndex === 3}
          onShow={() => setActiveIndex(3)}
        >
          At ClearLink, we prioritize the security and privacy of your video
          conferences. We employ end-to-end encryption to safeguard your
          communication, ensuring that only authorized participants can access
          the content. Additionally, our platform utilizes advanced security
          protocols to protect against unauthorized access, data breaches, and
          other potential threats.
        </Panel>
        <Panel
          title="Do I need to download any software to use ClearLink?"
          isActive={activeIndex === 4}
          onShow={() => setActiveIndex(4)}
        >
          No downloads required! ClearLink offers a hassle-free, browser-based
          experience. Simply access ClearLink through your preferred web
          browser, log in with your account credentials, and start enjoying
          seamless video conferencing. This eliminates the need for software
          installations, making it quick and convenient to join meetings and
          collaborate with others. Whether you're on a computer, tablet, or
          smartphone, ClearLink is designed for easy accessibility without the
          need for additional downloads.
        </Panel>
        <Panel
          title="What kind of customer support does ClearLink provide?"
          isActive={activeIndex === 5}
          onShow={() => setActiveIndex(5)}
        >
          ClearLink is dedicated to delivering exceptional customer support to
          ensure a smooth and satisfying experience for our users. Our support
          team is available to assist you with any questions, technical issues,
          or inquiries you may have. You can reach our support team through
          various channels, including email and live chat. We strive to provide
          timely and effective solutions to meet your needs and enhance your
          ClearLink experience..
        </Panel>
      </div>
    </div>
  );
}
export default Faq;
