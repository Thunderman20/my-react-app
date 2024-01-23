import ComponentD from "./componentD";
import React,{useContext} from "react";
import { UserContext } from "./componentA";
function ComponentC() {
  const user=useContext(UserContext);
  return(
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
}
export default ComponentC