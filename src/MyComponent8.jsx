import React, { useState, useEffect,useRef } from "react";

/**
 * @type {React.RefObject<HTMLInputElement>}
 */
function MyComponent8() {
  const inputRef1 =useRef(null);
  const inputRef2 =useRef(null);
  const inputRef3 =useRef(null);
  
  useEffect(()=>{
    console.log("rendered component");
    console.log(inputRef1);
    console.log(inputRef2);
    console.log(inputRef3);
    
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="cadetblue";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";
    inputRef1.current.value="Click me 1";
    inputRef1.current.style.color="white";

  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor="cadetblue";
    inputRef1.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";

  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor="cadetblue";
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="";
  }
  return (
    <div>
   <button onClick={handleClick1}>
    Click me 1
   </button>
   <input  ref={inputRef1}/>
   <button onClick={handleClick2}>
    Click me 2 
   </button>
   <input  ref={inputRef2}/>
   <button onClick={handleClick3}>
    Click me 3
   </button>
   <input  ref={inputRef3}/>

    </div>
  );
}
export default MyComponent8
