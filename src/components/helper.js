import {API} from "./back.js";
 const register=(user)=>{
    return fetch(`http://127.0.0.1:8000/api/doctors/doctors/user/`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
    })
     .then((response)=>{
         return response.json();
     })
     .catch((err)=>console.log(err));
};
export default register