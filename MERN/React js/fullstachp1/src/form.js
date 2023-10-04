// import { useState } from "react";

//  function Reegister()
//  {
//     const[username,setUsername]=useState('')
//     const[email,setEmail]=useState('')
//     const[password,setPasswoord]=useState(' ')
//     const[confirmpassword,setConfirmPassWord]=useState(' ')
//      const handleSubmit=(mani) =>{
//         mani.PreventDefault();
//         if(password===confirmpassword)
//         {
//             console.log("register the form")
//         }
//         else
//         {
//             console.log("password do not the match")
//         }
//      }
//      return(
//        <div className="register-form">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//            <lable>Username</lable>
//            <input type="text" value={username} onChange={(mani) =>setUsername(mani.target.value)}/>
//             </div>
//             <div className="form-group">
//            <lable>email</lable>
//            <input type="text" value={email} onChange={(mani) =>setEmail(mani.target.value)}/>
//             </div>
//             <div className="form-group">
//            <lable>password</lable>
//            <input type="text" value={password} onChange={(mani) =>setPasswoord(mani.target.value)}/>
//             </div>
//             <div className="form-group">
//            <lable>confirmpassword</lable>
//            <input type="text" value={confirmpassword} onChange={(mani) =>setConfirmPassWord(mani.target.value)}/>
//             </div>
//             <button type="submit">Register</button>
//         </form>

//        </div>
//      );
//  }
//  export default Reegister;

