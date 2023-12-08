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
      <div
        className="flex flex-col-reverse absolute left-[61%] top-[60%] -translate-x-[50%] -translate-y-[50%]
      md:flex-col md:top-[50%] md:left-[100%] md:gap-8"
      >
        {/* front card container */}
        <div className="z-50 w-[280px] relative -translate-x-[100px] md:w-[300px]">
          {/* card logo */}
          <img
            src={card_logo}
            alt="card-logo"
            className="w-[50px] absolute top-4 left-4"
          />

          <div>
            {/* image for the front of the card */}
            <img src={card_front} />
            <h1 className="text-lg absolute bottom-[5rem] left-[1rem] tracking-[2px]">
              0000 0000 0000 0000
            </h1>
            {/* front card name and expiry */}
            <div className="flex justify-between absolute bottom-[2rem] left-[1rem] right-[3rem]">
              {/* name */}
              <span>juliana robbins</span>
              {/* date */}
              <span>
                {/* span for month */}
                <span>00</span> /{/* span for year */}
                <span>00</span>
              </span>
            </div>
          </div>
        </div>
        {/* back card */}
        <div className="w-[280px] translate-y-[70px] relative md:w-[300px]">
          <img src={card_back} />
          <span className="absolute top-[42%] right-[12%]">000</span>
        </div>
      </div>
    </div>
  );
}
