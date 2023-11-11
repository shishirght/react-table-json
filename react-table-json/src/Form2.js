import { useRef, useState } from "react";
// un controlled component
function Form2(){

    //let [formData,setFormData] = useState({fname:"",email:"",pass:""})
    let [formData,setFormData] = useState({
        fname:"",
        email:"",
        pass:"" 
    });

let fname = useRef();
let email = useRef();
let pass = useRef();





    // let handleChange = (e) => {
    //     e.preventDefault(); //console.log({fname,email,pass});
    //     setFormData({...setFormData,[e.target.name] :e.target.value});

    // }; 


    let handleSubmit = (e) => {
        e.preventDefault(); 
       // console.log("formData: "+formData)

        let data = {
            fname : fname.current.value,
            email : email.current.value,
            pass : pass.current.value
        }
        console.log("data: "+JSON.stringify(data));

        setFormData(data)

        // fetch("http://xyz.com",{
        //     method:"POST",
        //     body:JSON.stringify(formData),
        //     headers:{
        //         "content-type":"application/json"
        //     }
        // }).then(res => alert("user created succesfully"))
    
    
    };

    return(
        <>
        {JSON.stringify(formData)}

        <form onSubmit={handleSubmit}>
            <br/>
            <label htmlFor="fname">Enter your name</label>
            <input id="fname" name="fname" type="text"  placeholder="Enter your name.." ref={fname}/>
            <br/>
            <label htmlFor="email">Enter your Email</label>
            <input id="email" name="email" type="email" ref={email}  />
            <br/>
            <label htmlFor="pass">Enter your Pass</label>
            <input id="pass" name="pass" type="password" ref={pass}  />
            <br/>
            <button type="submit"> SUBMIT </button>
        </form>
        </>
    )

}

export default Form2;