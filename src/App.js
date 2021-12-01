import music from "./img/music.svg";
import hero from "./img/hero.svg";
import mobile from "./img/mobile.svg";
import desktop from "./img/desktop.svg";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img src={music} alt="" />
      </div>
    </div>
  );
}

export default App;
