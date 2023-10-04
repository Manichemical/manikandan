// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import Sample1 from './App';
// // import Reegister from './form';
// import Register from './register';
 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>

//     {/* <Reegister/> */}
//     <Register/>
//   </div>
// );
// // import './index.css';

// // const my1=(
// //   <>
// //   <h1>maniknadan</h1>
// //   </>
// // );
// //  const r1 =ReactDOM.createRoot(document.getElementById("root"));
// //  r1.render(my1);

// /*const f1=10
// let txt="welcome";
//  if (f1>9)
//  {
//   txt="kaviya"
//  }
//  const my1=<h1>manikandan {txt}</h1>
//   const p1= ReactDOM.createRoot(document.getElementById("root"))
//   p1.render(my1)*/

// // class Sample extends React.Component
// // {
// //   constructor(){
// //     super();
// //     this.state={c1: "welcome"}
// //   }
// //   render(){
// //     return <h>this my {this.c1}hand bag</h>
// //   }
// // };

// // const r1 =ReactDOM.createRoot(document.getElementById("root"));
// // r1.render(<Sample/>);
// // class Mani extends React.Component
// // {
// //   render(){/
// //     return <h1>Manikandan</h1>
// //   }
// // }
// // class Sample extends React.Component
// // {
// //   render(){
// //     return(
// //       <div>
// //         <h1>fghjk</h1>
// //       </div>
      
// //     );
// //   <Mani/>
// //   }
// // }
// //  const r1 =ReactDOM.createRoot.createRoot(document.getElementById("root"));
// //  r1.render(<Sample/>)

// // const r1=ReactDOM.createRoot(document.getElementById("root"));
// // r1.render(<Sample1/>)



//========================================
//Router pages
import React from 'react'
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout  from "./pages/layout";
import Home from "./pages/Home";
import Contact from"./pages/contact";
import Login from "./pages/login";
import Register from "../pades/Register";
  

 export default function App()
 {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path=" " element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path = "/Contact" element={<Contact/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
 }
 const r1=ReactDOM.createRoot(document.getElementById("root"));
 r1.render(<App/>);