import "./App.css";
import TheFooter from "./The-Footer/TheFooter";
import Navbar from "./The-body/Navbar/Navbar";
import Slides from "./The-body/Slide/Slides";
import Thebody from "./The-body/Thebody";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Slides />
      <Thebody />
      <hr className="but"/>
      <TheFooter/>
    </div>
  );
}

export default App;
