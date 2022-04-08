import { useEffect, useState } from "react";

const HasLoggedIn = () =>{
    const [loggedIn, setLoggedIn] = useState(null);
    
  useEffect(()=>{
      const isLoggedIn = sessionStorage.getItem("uid");
      if(isLoggedIn){
          setLoggedIn(true)
      }else{
          setLoggedIn(false)
      }
  }, [])
 return loggedIn;
};
export default HasLoggedIn;