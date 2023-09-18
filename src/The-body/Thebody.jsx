import OurSkill from "./Our-Skills/OurSkill";
import AboutUs from "./About-Us/AboutUs";
import OurTeam from "./The-Team/OurTeam";
import Remark from "./Remark/Remark";
import OurServices from "./Our-Services/OurServices";
import ContactUs from "./Contact-Us/ContactUs";

function Thebody() {
  return (
    <div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <AboutUs />
        <OurTeam />
        <OurSkill />
        <Remark />
        <OurServices />
        <h4 id="scrollspyHeading3">Portfolio</h4>
        <p>...</p>
        <ContactUs />

      </div>
    </div>
  );
}

export default Thebody;
