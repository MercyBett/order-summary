import music from "./img/music.svg";
import hero from "./img/hero.svg";
import mobile from "./img/mobile.svg";
import desktop from "./img/desktop.svg";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-lg bg-veryPale font-Red cursor-pointer mx-6 lg:my-10 w-screen md:w-7/12 lg:w-3/12 w-3/12 h-1/2">
        <div className="h-1/6">
          <img className="rounded-lg" src={hero} alt="hero section" />
        </div>
        <div className="p-6">
          <div className="flex flex-col justify-center items-center">
            <p>Order Summary</p>
            <p>
              You can now listen to million of songs,audiobooks and podcasts on
              any device anywhere you like!
            </p>
          </div>
          <div className="flex justify-between items-center mt-2 p-2 rounded-lg bg-desaturated">
            <div className="flex ">
              <img className="w-12 h-12" src={music} alt="music icon" />
              <div className="pl-2">
                <p>Annual Plan</p>
                <p>$59.99/year</p>
              </div>
            </div>
            <p>
              <a href="">Change</a>
            </p>
          </div>
          <button className="rounded-lg bg-dark w-full p-2 mt-5">
            Proceed to payment
          </button>
          <p>Cancel Order</p>
        </div>
      </div>
    </div>
  );
}

export default App;
