import {API} from "../backend";
export const register=(user)=>{
    return fetch(`${API}user/`, {
        method :"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": 'application/json',
        },
        body:JSON.stringify(user),
    })
      .then((response)=>{
          return response.json();
      })
       .catch((err)=>console.log(err));
};
export const signin=(user)=>{
    const formData=new FormData();
    for(const name in user){
        console.log(user[name]);
        formData.append(name, user[name]);
    }
    for (var key of formData.keys()){
        console.log("MYKEY: ",key);
    }

    return fetch(`${API}user/login/`, {
        method: "POST",
        body: formData,
    })
     .then((response)=>{
         console.log("SUCCESS", response);
         return response.json();
     })
      .catch((err)=>console.log(err));
};
export const isAuthenticated = () => {
    if (typeof window == undefined) {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
      //TODO: compare JWT with database json token
    } else {
      return false;
    }
  };
  
  export const signout = async (next) => {
    const userId = isAuthenticated() && isAuthenticated().user.id;
  
    console.log("USERID: ", userId);
  
    if (typeof window !== undefined) {
      localStorage.removeItem("jwt");
  
      try {
            const response = await fetch(`${API}user/logout/${userId}`, {
                method: "GET",
            });
            console.log("Signout success");
            next();
        }
        catch (err) {
            return console.log(err);
        }
    }
  };
  