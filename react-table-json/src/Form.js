import { useState } from "react";

function Form(){

    //let fname,email,fname;

    let[fname,setFname] = useState("");
    let[email,setEmail] = useState("");
    let[pass,setPass] = useState("");

    let handleName = (e) => {console.log(e.target.value); setFname(e.target.value)};
    let handleEmail = (e) => {console.log(e.target.value);setEmail(e.target.value)};
    let handlePass = (e) => {console.log(e.target.value);setPass(e.target.value)};

    let handleSubmit = (e) => {e.preventDefault(); console.log({fname,email,pass})};


    return(

        <form onSubmit={handleSubmit}>
            <br/>
            <label htmlFor="fname">Enter your name</label>
            <input id="fname" type="text" required placeholder="Enter your name.." onChange={handleName}/>
            <br/>
            <label htmlFor="email">Enter your Email</label>
            <input id="email" type="email" onChange={handleEmail} required />
            <br/>
            <label htmlFor="pass">Enter your Pass</label>
            <input id="pass" type="password" onChange={handlePass} required />
            <br/>
            <button type="submit"> SUBMIT </button>

        </form>
    )

}

export default Form;