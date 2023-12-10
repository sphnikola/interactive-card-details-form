import { useState } from "react";
import { Input } from "./Input";

export default function RightSection() {
  const [inputFields, setInputFiels] = useState({
    name: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const handleChange = (e) => {
    setInputFiels({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" flex items-center justify-center w-full mt-24 md:mt-0">
      <form className="grid grid-cols-[repeat(2,1fr)] gap-[1rem] w-[350px]">
        <div className="flex flex-col col-start-1 col-end-3">
          <Input
            style={{ width: "100%" }}
            htmlFor="card_name"
            label="cardholder name"
            type="text"
            name="name"
            value={inputFields.name}
            placeholder="john doe"
            onChange={handleChange}
          />
          <Input
            style={{ width: "100%" }}
            htmlFor="cardNumber"
            label="card number"
            type="number"
            name="cardNumber"
            value={inputFields.card_number}
            placeholder="1234 5678 9123 0000"
            onChange={handleChange}
          />
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="date">Exp. Date (MM/YY)</label>
              <div className="flex">
                <div className="">
                  <Input
                    style={{ width: "70px" }}
                    htmlFor="MM"
                    label="MM"
                    type="number"
                    name="MM"
                    value={inputFields.MM}
                    placeholder="MM"
                    onChange={handleChange}
                  />
                </div>
                <div className="ml-2">
                  <Input
                    style={{ width: "70px" }}
                    htmlFor="YY"
                    label="YY"
                    type="number"
                    name="YY"
                    value={inputFields.YY}
                    placeholder="YY"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <Input
                    style={{ width: "100%" }}
                    htmlFor="cvc"
                    label="cvc"
                    type="number"
                    name="cvc"
                    value={inputFields.CVC}
                    placeholder="123"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="h-[50px] bg-Very-dark-violet text-White rounded-md mt-10"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
