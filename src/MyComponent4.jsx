import React,{useState,useEffect} from "react";
  function MyComponent4() {
    const [foods, setFoods] = useState(() => {
      const storedFoods = localStorage.getItem("foods");
      const parsedFoods = storedFoods ? JSON.parse(storedFoods) : [];
      return parsedFoods.length > 0 ? parsedFoods : ["Apple", "Orange", "Banana"];
    });
    
    useEffect(() => {
      localStorage.setItem("foods", JSON.stringify(foods));
    }, [foods]);
    

    function handleAddFood() {
      const newFood =document.getElementById("foodInput").value;
      document.getElementById("foodInput").value ="";

      setFoods(f =>[...f,newFood]);
    }
    function handleRemoveFood(index) {
      setFoods(foods.filter((_,i)=>i !== index));
    }
  return(
    <div>
  <h2>List of food</h2>
  <ul >
    {foods.map((food,index)=> 
    <li id="listcontainer" key={index}>{food}
    <button id="listbutton" onClick={()=>handleRemoveFood(index)}></button></li>)}
  </ul>
  <div id="inputcontainer">
  <input className="inputstuff" onKeyDown={(event)=>event.key==="Enter"&& handleAddFood()} type="text" placeholder="Enter food name" id="foodInput" />
   <button className="inputstuff" onClick={handleAddFood}>Add food</button>
   </div>
    </div>
  );

}
export default MyComponent4