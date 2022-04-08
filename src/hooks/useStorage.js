import { useEffect, useState } from "react";
import { isHasUserInLocalStorage } from "../utilities/keepMeSignIn";

const useStorage = () =>{
    const [users, setUsers] = useState({});
   
    useEffect(()=>{
        const userItems = isHasUserInLocalStorage();
        const loggedInUserUid = sessionStorage.getItem("uid");
        const getUser = userItems.find(user => user.uid === loggedInUserUid);
        setUsers(getUser)
        console.log(userItems, loggedInUserUid);
    }, [])
    
    return {users, setUsers}; 

};
export default useStorage;