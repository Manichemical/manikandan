import React from "react";
import "./redister.css";
  
function Register()
{
    function hanleChange(event){
        console.log("Data changed");
        console.log(event.target.value);
        console.log(event.target.type);
        console.log(event.target.placeholder);

    }
    return(
    <div className="container">
       <form>
        <h1>Register Form</h1>
           <input   onChange={hanleChange} type="text" placeholder="enter you name" />
           <button>submit</button>
       </form>
    </div>
)
}
 export default Register;