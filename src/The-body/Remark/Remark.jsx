import "./Remark.css";
import RemarkSlide from "./RemarkSlide";
function Remark() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="remarkImg carousel slide"
        data-bs-ride="carousel"
      >
        <img
          src="../../../public/download.jpeg"
          className=" remImg w-100"
          alt=""
        />
        <RemarkSlide />
      </div>
    </div>
  );
}

export default Remark;
