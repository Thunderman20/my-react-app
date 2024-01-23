import React,{useState,useEffect} from "react";
function MyComponent7() {

  const[width,setWidth]=useState(window.innerWidth);
  const[height,setHeight]=useState(window.innerHeight);

  useEffect(()=>{
    window.addEventListener("resize",handleResize);
  console.log("event listener added");

  return()=>{
    window.removeEventListener("resize",handleResize);
    console.log("event listener removed");
  }
  },[]);
  useEffect(()=>{
    document.title=`size ${width}x${height}`;
  });
  

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return(
   <>
   <p>Window Width{width}px</p>
   <p>Window Height{height}px</p>
   </>
    
   
  );

}
export default MyComponent7