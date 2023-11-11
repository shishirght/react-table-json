import React from "react";
import ClassComponent1 from "./ClassComponent1";
class classComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }


    handleIncrement = () => {        
        let incr = this.state.count+1;
        console.log("incr the count "+incr)
        this.setState({count:incr})
    }

    render(){
        return (
            <>
                <h1>Count: { this.state.count }</h1>
                <button onClick={this.handleIncrement}>+</button>
               <ClassComponent1 name="test1" email="test@gmail" ></ClassComponent1>
            </>
        )
    }

}

export default classComponent;