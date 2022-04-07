import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Details from "./Details";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./Review.js";
import Submit from "./Submit";

const steps = [
  { id: "details" },
  { id: "shipping" },
  { id: "payment" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  zip: "",
  email: "",
  phone: "",
  cardnumber:"",
  shippingmethod:""
};

const MultiStepForm = () => {
  const [fields, setfieldForm] = useForm(defaultData);
  const [Paymentfields, setPaymentfields] = useForm(defaultData);
  const [shipMethod, setshipmethod] = useForm(defaultData);
  
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  
  
  const props = { fields,  Paymentfields, shipMethod, setshipmethod, setfieldForm, setPaymentfields, navigation };

  switch (id) {
    case "details":
      return <Details {...props} />;
    case "shipping":
      return <Shipping {...props} />;
    case "payment":
      return <Payment {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
