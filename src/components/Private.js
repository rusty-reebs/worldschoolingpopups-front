// import React, { useState } from "react";
// import Nav from "./Nav";
// import Input from "./Input";
// import Button from "./Button";
// import "../output.css";
// import { useNavigate } from "react-router-dom";

// const Private = (props) => {
//   const [text, setText] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let rawResponse = await fetch("/private", {
//         method: "POST",
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text }),
//       });
//       console.log("raw", rawResponse);
//       let responseJson = await rawResponse.json();
//       console.log(responseJson);
//     } catch (err) {
//       if (err) {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <div className="bg-yellow h-screen">
//       <Nav />
//       <div className="mx-3">
//         <h3 className="text-base text-center mb-4">Register as a new user</h3>
//         <p className="text-xs italic font-light text-red mb-2">* required</p>
//         <form onSubmit={handleSubmit}>
//           <Input
//             name="text"
//             placeholder=""
//             label="Test text"
//             type="text"
//             required="true"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <div className="flex justify-center mt-5">
//             <Button name="Submit"></Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Private;
