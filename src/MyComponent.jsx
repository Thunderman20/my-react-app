import React,{useState} from "react";
function MyComponent() {
  const [name,setName]=useState("Guest");
  const [age,setAge]=useState(0);
  const [isEmployed,setIsEmployed]=useState(false);
  const updateName=()=>{
   setName("spongbob");
  }
  const incrementAge=()=>{
    setAge(age + 1);
  }
  const toggleEmployedStatus=()=>{
    setIsEmployed(!isEmployed);
  }
  return(
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>set Name</button>
      <p>Age:{age}</p>
      <button onClick={incrementAge}>increment Age</button>
      <p>is employed:{isEmployed?"yes":"no"}</p>
      <button onClick={toggleEmployedStatus}>toggle status</button>
    </div>
  );

}
export default MyComponent