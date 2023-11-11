import React from "react";
class ClassComponent1 extends React.Component {
    constructor(props){
        super(props)  
        console.log(props); 
        //console.log("In constructor  name: "+this.props.name);
        //console.log("In constructor  email: "+this.props.email); 
    }
    render(){
        return (
            <>
                        <h2 >
                            name: {this.props.name} <br/>
                            Email: {this.props.email}
                            
                        </h2>
            </>
        )
    }
}

export default ClassComponent1;