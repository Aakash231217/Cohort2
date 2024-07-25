import { useState } from "react";
import {BottomWarning} from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading";
import axios from "axios";
import {InputBox} from "../components/InputBox";
import {Button}from "../components/Button";





export const Signup=()=>{
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white  w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your information to create an account"}/>
            <InputBox onChange={(e)=>{
                setfirstName(e.target.value);
            }} placeholder="John" label={"FirstName"}/>
            <InputBox onChange={(e)=>{
                setlastName(e.target.value);
            }} placeholder="Doe" label={"LastName"}/>
            
            <InputBox onChange={(e)=>{
                setUsername(e.target.value);
            }} placeholder="aakash@gmail.com" label={"Email"}/>
            <InputBox onChange={(e)=>{
                setPassword(e.target.value);
            }} placeholder="123456" label={"Password"}/>
            <div className="pt-4">
                <Button onClick={async()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        firstName,
                        lastName,
                        password
                    });
                    localStorage.setItem("Token",response.data.token);
                    navigate("/dashboard")
                }}label={"Signup"}/>
            </div>
            
          <BottomWarning label={"Already have an account"} buttonText={"Signin"} to={"/signin"}/>
            </div>
        </div>
    </div>
}