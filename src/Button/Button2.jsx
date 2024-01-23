
function Button2() {
  const st ={
      backgroundColor: "hsl(206, 100%, 55%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer"
    }
    let count =0;
    const handleClick = (name)=>{
      if (count < 3) {
        count++;
        console.log(`${name} you clicked me ${count} times`);
      }else{
        console.log(`${name} stop clicking me`);
      }
    };
  
  return(
    
    
    <button onClick={()=>handleClick("Thunder")} style={st}>Click Me🥰</button>
    
  );
  }
export default Button2