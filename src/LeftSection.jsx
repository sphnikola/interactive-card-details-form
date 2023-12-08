import card_logo from "./assets/images/card-logo.svg";
import card_front from "./assets/images/bg-card-front.png";
import card_back from "./assets/images/bg-card-back.png";

export default function LeftSection() {
  return (
    <div
      className=" w-full min-h-[30vh] bg-bg-main-mobile bg-center bg-cover bg-no-repeat relative
    md:min-h-screen md:w-[40%] md:bg-bg-main-desktop "
    >
      {/* container for the cards  */}
      <div className="flex flex-col-reverse absolute left-[61%] top-[60%] -translate-x-[50%] -translate-y-[50%]">
        {/* front card */}
        <div className="z-50 w-[280px] relative -translate-x-[100px]">
          {/* card logo */}
          <img
            src={card_logo}
            alt="card-logo"
            className="w-[50px] absolute top-4 left-4"
          />
          {/* card container */}
          <div>
            {/* image for the front of the card */}
            <img src={card_front} />
          </div>
        </div>
        {/* back card */}
        <div className="w-[280px] translate-y-[70px] relative">
          <img src={card_back} />
        </div>
      </div>
    </div>
  );
}
