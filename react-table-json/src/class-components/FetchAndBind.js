import React from "react";
class FetchAndBindClass extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            users:[]
        }

        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(jsondata => this.setState({ users: jsondata.data }))

    }

    render(){
        return (
          <>
            {this.state.users.map((user) => {
              return <div>&nbsp;<div>ID: {user.id}</div><div>Name: {user.first_name+' '+ user.last_name}.</div><div>Email: {user.email}</div></div>;
            })}
          </>
        );
    }
}

export default FetchAndBindClass;