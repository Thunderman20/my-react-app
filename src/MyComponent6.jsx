import React,{useState,useEffect} from "react";
function MyComponent6(props) {

  const [count,setCount]=useState(0);
  const [color,setColor]=useState("green");

  useEffect(()=>
  {document.title=`Count: ${count} ${color}`},[count,color]);

  function addCount() {
    setCount(c=>c+1);
  }
  function subtractCount() {
    setCount(c=>c-1);
  }
  function changeColor() {
    setColor(c=>c==="green"?"red":"green")
  }
  return(
   
    <div id={props.id}>
    <p style={{color:color}}>count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br />
    <button onClick={changeColor}>Change Color</button>
    </div>
   
  );

}
export default MyComponent6