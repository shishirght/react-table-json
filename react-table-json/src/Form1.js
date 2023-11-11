import { useState } from "react";

function Form1(){

    //let fname,email,fname;

    // let[fname,setFname] = useState("");
    // let[email,setEmail] = useState("");
    // let[pass,setPass] = useState("");

    //let [formData,setFormData] = useState({fname:"",email:"",pass:""})
    let [formData,setFormData] = useState({
        fname:"",
        email:"",
        pass:""
    }
        
    );


    // let handleName = (e) => {console.log(e.target.value); setFname(e.target.value)};
    // let handleEmail = (e) => {console.log(e.target.value);setEmail(e.target.value)};
    // let handlePass = (e) => {console.log(e.target.value);setPass(e.target.value)};

    let handleChange = (e) => {
        e.preventDefault(); //console.log({fname,email,pass});
        setFormData({...setFormData,[e.target.name] :e.target.value});

    }; 
    let handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(formData)

        fetch("http://xyz.com",{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "content-type":"application/json"
            }
        }).then(res => alert("user created succesfully"))
    
    
    };

    return(
        <>
        {JSON.stringify(formData)}

        <form >
            <br/>
            <label htmlFor="fname">Enter your name</label>
            <input id="fname" name="fname" type="text"  placeholder="Enter your name.." onChange={handleChange}/>
            <br/>
            <label htmlFor="email">Enter your Email</label>
            <input id="email" name="email" type="email" onChange={handleChange}  />
            <br/>
            <label htmlFor="pass">Enter your Pass</label>
            <input id="pass" name="pass" type="password" onChange={handleChange}  />
            <br/>
            <button type="submit"> SUBMIT </button>
        </form>
        </>
    )

}

export default Form1;