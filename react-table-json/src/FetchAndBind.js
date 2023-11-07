import {useState} from 'react';
import { useEffect } from 'react';
function FetchAndBind() {
  // 20231106091946
  // https://reqres.in/api/users

  let [users,setUsers] = useState([]);
  //fetch('https://reqres.in/api/users').then(res=> res.json()).then(jsonres => console.log(jsonres.data));
  

  useEffect( 
    () => {
        fetch('https://reqres.in/api/users').then(res=> res.json())
        .then(jsonres => setUsers(jsonres.data) );
        } ,[])

//     {
//       id: 1,
//       email: "george.bluth@reqres.in",
//       first_name: "George",
//       last_name: "Bluth",
//       avatar: "https://reqres.in/img/faces/1-image.jpg",
//     },
//     {
//       id: 2,
//       email: "janet.weaver@reqres.in",
//       first_name: "Janet",
//       last_name: "Weaver",
//       avatar: "https://reqres.in/img/faces/2-image.jpg",
//     },
//     {
//       id: 3,
//       email: "emma.wong@reqres.in",
//       first_name: "Emma",
//       last_name: "Wong",
//       avatar: "https://reqres.in/img/faces/3-image.jpg",
//     },
//     {
//       id: 4,
//       email: "eve.holt@reqres.in",
//       first_name: "Eve",
//       last_name: "Holt",
//       avatar: "https://reqres.in/img/faces/4-image.jpg",
//     },
//     {
//       id: 5,
//       email: "charles.morris@reqres.in",
//       first_name: "Charles",
//       last_name: "Morris",
//       avatar: "https://reqres.in/img/faces/5-image.jpg",
//     },
//     {
//       id: 6,
//       email: "tracey.ramos@reqres.in",
//       first_name: "Tracey",
//       last_name: "Ramos",
//       avatar: "https://reqres.in/img/faces/6-image.jpg",
//     },
//   ];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Mail</th>
            <th>Name</th>
            <th>Surname</th>
            <th>DP</th>
            {/* "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg" */}
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => 
            {return (
            <tr> 
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>             
                <td><img src={user.avatar}></img></td>
                
            </tr>
            )}
            
         )
          }
        </tbody>
      </table>
    </>
  );
}
export default FetchAndBind;
