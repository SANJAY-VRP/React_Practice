import React from "react";
import { useState } from "react";
function Cars() {
  const [cars, setCars] = useState([]);
  const [carname, setCarName] = useState("");
  const [carmodel, setCarModel] = useState("");
  const [carmake, setCarMake] = useState("");
  const [caryear, setCarYear] = useState(new Date().getFullYear());

  function handleName(e) {
    setCarName(e.target.value);
    console.log(e.target.value);
  }
  function handleModel(e) {
    setCarModel(e.target.value);
    console.log(e.target.value);
  }
  function handleMake(e) {
    setCarMake(e.target.value);
    console.log(e.target.value);
  }
  function handleYear(e) {
    setCarYear(e.target.value);
    console.log(e.target.value);
  }
  function handleCars() {
    const newcar = {
      name: carname,
      make: carmake,
      model: carmodel,
      year: caryear,
    };
    setCars((c) => [...c, newcar]);
    console.log(cars);

    setCarMake("");
    setCarModel("");
    setCarName("");
    setCarYear(new Date().getFullYear());
  }
  function handleDelete(index) {
    setCars(cars.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1>Cars</h1>
      <input
        type="text"
        id="make"
        onChange={(e) => {
          handleMake(e);
        }}
        placeholder=" Car Make"
        value={carmake}
      />{" "}
      <br />
      <input
        type="text"
        id="model"
        onChange={(e) => {
          handleModel(e);
        }}
        placeholder=" Car Model"
        value={carmodel}
      />{" "}
      <br />
      <input
        type="text"
        id="name"
        onChange={(e) => {
          handleName(e);
        }}
        placeholder=" Car Name"
        value={carname}
      />{" "}
      <br />
      <input
        type="text"
        id="year"
        onChange={(e) => {
          handleYear(e);
        }}
        placeholder=" Car Year"
        value={caryear}
      />{" "}
      <br />
      <button onClick={() => handleCars()}>Add Car</button>
      <h1>Cars List</h1>
      <ul>
        {cars.map((car, index) => (
          <li onClick={() => handleDelete(index)} key={index}>
            Name : {car.name} <br />
            Make : {car.make} <br />
            Model : {car.model} <br />
            Year : {car.year} <br />
          </li>
        ))}
      </ul>
    </>
  );
}
export default Cars;
