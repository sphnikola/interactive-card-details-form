import { useEffect, useState } from "react";
import { Input } from "./Input";
import Cards from "./Cards";
import complete from "./assets/images/icon-complete.svg";

export default function Container() {
  const [inputFields, setInputFiels] = useState({
    name: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputFields.cardNumber.length < 16) {
      errors.cardNumber = "too short";
    }
    if (inputFields.MM.length < 2) {
      errors.MM = "too short";
    }

    if (inputFields.YY.length < 2) {
      errors.YY = "too short";
    }
    if (inputFields.CVC.length < 3) {
      errors.CVC = "too short";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInputFiels({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const cardNumberMax = 16;
  if (inputFields.cardNumber.length > cardNumberMax) {
    inputFields.cardNumber = inputFields.cardNumber.slice(0, cardNumberMax);
  }

  const dateMax = 2;
  if (inputFields.MM.length > dateMax) {
    inputFields.MM = inputFields.MM.slice(0, dateMax);
  }
  if (inputFields.YY.length > dateMax) {
    inputFields.YY = inputFields.YY.slice(0, dateMax);
  }

  const cvcmax = 3;
  if (inputFields.CVC.length > cvcmax) {
    inputFields.CVC = inputFields.CVC.slice(0, cvcmax);
  }

  const num = inputFields.cardNumber
    .replace(/\W/gi, "")
    .replace(/(.{4})/g, "$1 ");

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <>
      <>
        {Object.keys(errors).length === 0 && submitting ? (
          <>
            <Cards
              name={inputFields.name}
              cardNumber={num}
              month={inputFields.MM}
              year={inputFields.YY}
              cvc={inputFields.CVC}
            />
            <div className=" flex flex-col items-center justify-center w-full mt-24 md:mt-0">
              <img src={complete} />
              <h1 className="uppercase tracking-[3px]">Thank you</h1>
              <p>We've added your card details</p>
              <button
                type="submit"
                className="h-[50px] w-[350px] bg-Very-dark-violet text-White rounded-md mt-10"
              >
                Confirm
              </button>
            </div>
          </>
        ) : (
          <>
            <Cards
              name={inputFields.name}
              cardNumber={num}
              month={inputFields.MM}
              year={inputFields.YY}
              cvc={inputFields.CVC}
            />
            <div className=" flex items-center justify-center w-full mt-24 md:mt-0">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-[repeat(2,1fr)] gap-[1rem] w-[350px]"
              >
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
                    value={inputFields.cardNumber}
                    placeholder="1234 5678 9123 0000"
                    onChange={handleChange}
                  />
                  {errors.cardNumber && <p className="error">Email should</p>}
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
                          {errors.MM && <p className="error">Email should</p>}
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
                          {errors.YY && <p className="error">Email should</p>}
                        </div>
                        <div className="flex flex-col ml-2">
                          <Input
                            style={{ width: "100%" }}
                            htmlFor="cvc"
                            label="cvc"
                            type="number"
                            name="CVC"
                            value={inputFields.CVC}
                            placeholder="123"
                            onChange={handleChange}
                          />
                          {errors.CVC && <p className="error">Email should</p>}
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
          </>
        )}
      </>
    </>
  );
}
