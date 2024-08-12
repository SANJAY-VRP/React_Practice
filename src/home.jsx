import React, { useContext } from "react";
import Counter from "./counter";
import { useState } from "react";
import ColourPicker from "./colourpicker";
import DigitalClock from "./clock";
import { userContext } from "./componentA";

function Home(props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  }; 
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  const handleShipping = (e) => {
    setShipping(e.target.value);
  };
 
  const name1 = useContext(name);
  return (
    <>
      <ColourPicker/>
      <Counter />
      <input
        type="number"
        className="m-2"
        onChange={(e) => handleQuantity(e)}
        value={quantity}
      />{" "}
      <br />
      <input
        type="text"
        className="m-2"
        onChange={(e) => handleChange(e)}
        value={name}
      />{" "}
      <br />
      <textarea
        className="m-2"
        value={comment}
        onChange={(e) => handleComment(e)}
        placeholder="enter delivery instructions"
      ></textarea>
      <br />
      <select onChange={(e) => handlePayment(e)} value={payment}>
        <option value="visa">visa</option>
        <option value="depit">Depit</option>
        <option value="credit">Credit</option>
      </select>
      <label>
        Pickup
        <input
          type="radio"
          value="pickup"
          checked={shipping === "pickup"}
          onChange={(e) => handleShipping(e)}
        />
      </label>
      <label>
        Delivery
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={(e) => handleShipping(e)}
        />
      </label>
      <p>Name : {name}</p>
      <p>Quantity : {quantity}</p>
      <p>Comment : {comment}</p>
      <p>Payment : {payment}</p>
      <p>Detail : {shipping}</p>


      <DigitalClock/>


      
    </>
  );
}
export default Home;
