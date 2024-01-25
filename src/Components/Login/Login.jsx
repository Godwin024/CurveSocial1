import React from "react";
import "./Login.css";
import { MdOutlineContactMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import {  useNavigate } from "react-router-dom";
import mercy from "../../../public/mercy.jpg"
import ella from "../../../public/ella.JPG"
import favour from "../../../public/favour.jpg"
import jerry from "../../../public/jerry.jpg"
import maro from "../../../public/maro.jpg"
import henry from "../../../public/henry.jpg"
import chidera from "../../../public/Chidera.jpg"
// import { Navigate } from "react-router-dom";

const users = [
    {
        name: "Ikathor Mercy",
        email: "mercy@gmail.com",
        password: "1234",
        image: mercy
    },
    {
        name: "Nduka Favor",
        email: "favour@gmail.com",
        password: "1234",
        image: favour
    },
    {
        name: "Obodo Emmanuella",
        email: "ella@gmail.com",
        password: "1234",
        image: ella
    },
    {
        name: "Nwasa Godwin",
        email: "godwin@gmail.com",
        password: "1234",
        image:"src/Components/Home/Godwin.jpg"
    },
    {
        name: "Akude Chidera",
        email: "ekene@gmail.com",
        password: "1234",
        image: chidera
    },
    {
        name: "Henry Trust",
        email: "henry@gmail.com",
        password: "1234",
        image: henry
    },
    {
        name: "Eze Francis",
        email: "francis@gmail.com",
        password: "1234",
        image:""
    },
    {
        name: "Ake Maro",
        email: "maro@gmail.com",
        password: "1234",
        image: maro
    },
    {
        name: "Ekele Jeremiah",
        email: "jerry@gmail.com",
        password: "1234",
        image: jerry
    },
]
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ isError: false, type: "", message: "" });
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   console.log(userData);

//   if (!userData) {
//     localStorage.setItem("userData", JSON.stringify(users));
//   }
console.log(users);

localStorage.setItem("userData", JSON.stringify(users));

  const authorizeUsers = users.find(
    (admin) => admin.email === email && admin.password === password
  );
  console.log(authorizeUsers);

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const Nav = useNavigate();

  const handleForm = () => {
    if (!authorizeUsers) {
      alert("You are not a resgistered member!");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(authorizeUsers));
      Nav("/instagram");
    }
  };

  return (
    <div className="loginHold">
     <form action="">
     <div className="loginWrap">
        <div className="high">
          <div className="inf">
            {error.isError && error.type === "email" ? (
              <p style={{ color: "red" }}>{error.message}</p>
            ) : null}
          </div>
          <div className="top11">
            <MdOutlineContactMail style={{ fontSize: "12px" }} />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="high">
          <div className="inf">
            {error.isError && error.type === "password" ? (
              <p style={{ color: "red", fontSize: "10px" }}>{error.message}</p>
            ) : null}
          </div>
          <div className="midz">
            <RiLockPasswordFill style={{ fontSize: "12px" }} />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEye
                onClick={handleShowpassword}
                style={{ fontSize: "12px" }}
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowpassword}
                style={{ fontSize: "12px" }}
              />
            )}
          </div>
        </div>

        <div className="login">
          <button onClick={handleForm}>Login</button>
          <button onClick={() => Nav("/signup")}>SignUp</button>
        </div>
      </div>
     </form>
    </div>
  );
};

export default Login;