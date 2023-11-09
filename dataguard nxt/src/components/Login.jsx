import React, { useState } from "react";
import { Container } from "react-bootstrap";
import image from "./assests/Layer 24 1.png";
import image2 from "./assests/Vector Smart Object 1.png";



function Login() {

  const [phno,setphno]=useState("")
  const [password,setPassword]=useState("")

  const onsubmit = ()=>{
    if(phno===+918086808680 && password===123456){
      alert("login successfull")
    }else{
      alert("enter correct credentials")
    }
  }
  
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="container-fluid d-flex flex-column "
      >
        <div style={{ height: "300px" }} className="row ">
          <span>
            <h6 className="text-center mt-5 font-italic">Welcome</h6>
          </span>

          <img style={{ height: "200px" }} src={image2} alt="" />
        </div>

        <div
          style={{ marginTop: "-150px" }}
          className="row justify-content-center d-flex"
        >
          <div style={{ width: "500px" }} className="">
            <div class="form-floating mb-3">
              <input
              onChange={(e)=>(setphno(e.target.value))}
                
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
              onChange={(e)=>(setPassword(e.target.value))}

                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
              <div className="d-flex justify-content-center">
                <button  onClick={onsubmit} className="btn btn-success rounded mt-4 ">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row"></div>

        <div className="">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
