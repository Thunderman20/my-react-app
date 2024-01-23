import React, { useState } from "react";
function MyComponent5() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar ={year:carYear,make:carMake,model:carModel};

    setCars(c=>[...c,newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars(c=>c.filter((_,i)=>i !== index));
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  return (
    <div>
      <h2>List of car Objects</h2>
      <ul>
        {cars.map((car,index)=>
        <li key={index} onClick={()=>handleRemoveCar(index)}>
            {car.year}{car.make}{car.model} <button id="listbutton"></button>
        </li>)}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <hr />
      <input type="text" placeholder="Enter car make" value={carMake} onChange={handleMakeChange} />
      <hr />
      <input type="text" placeholder="Enter car model" value={carModel} onChange={handleModelChange} />
      <button onClick={handleAddCar}>Add Car</button>
      <hr />
    </div>
  );
}
export default MyComponent5;
