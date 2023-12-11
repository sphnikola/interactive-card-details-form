import card_logo from "./assets/images/card-logo.svg";
import card_front from "./assets/images/bg-card-front.png";
import card_back from "./assets/images/bg-card-back.png";

export default function LeftSection(props) {
  const SHOW = "spencer";
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
        {/* front card container
        remember to increase size for lagrger screens and corresponding 
        info that comes with it.
         */}

        <div className="z-50 w-[280px] relative -translate-x-[100px] md:w-[300px] ">
          {/* card logo */}
          <img
            src={card_logo}
            alt="card-logo"
            className="w-[50px] absolute top-4 left-4"
          />

          <div>
            {/* image for the front of the card */}
            <img src={card_front} />
            {props.cardNumber === "" ? (
              <h1 className="text-lg absolute bottom-[5rem] left-[1rem] tracking-[2px]">
                0000 0000 0000 0000
              </h1>
            ) : (
              <h1 className="text-lg absolute bottom-[5rem] left-[1rem] tracking-[2px]">
                {props.cardNumber}
              </h1>
            )}
            {/* <h1 className="text-lg absolute bottom-[5rem] left-[1rem] tracking-[2px]">
            0000 0000 0000 0000
            </h1> */}
            {/* front card name and expiry */}
            <div className="flex justify-between absolute bottom-[2rem] left-[1rem] right-[3rem]">
              {/* name */}
              {props.name === "" ? (
                <span>Jane Appleseed</span>
              ) : (
                <span>{props.name}</span>
              )}
              {/* <span>{props.name} </span> */}
              {/* date */}
              <span>
                {/* span for month */}
                {props.month === "" ? (
                  <span>00</span>
                ) : (
                  <span>{props.month}</span>
                )}
                / {/* span for year */}
                {props.year === "" ? (
                  <span>00</span>
                ) : (
                  <span>{props.year}</span>
                )}
              </span>
            </div>
          </div>
        </div>
        {/* back card */}
        <div className="w-[280px] translate-y-[70px] relative md:w-[300px]">
          <img src={card_back} />
          {props.cvc === "" ? (
            <span className="absolute top-[42%] right-[12%]">000</span>
          ) : (
            <span className="absolute top-[42%] right-[12%]">{props.cvc}</span>
          )}
        </div>
      </div>
    </div>
  );
}
