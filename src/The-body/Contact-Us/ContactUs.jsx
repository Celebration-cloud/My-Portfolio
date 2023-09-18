import "./ContactUs.css";
import GetInTouch from "./GetInTouch";
import Support from "./Support";
function ContactUs() {
  return (
    <div>
      <h4 id="scrollspyHeading4">CONTACT US</h4>
      <br />
      <div className="conUs container">
        <div className="row">
          <Support />
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
