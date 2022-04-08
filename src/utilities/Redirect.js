import { useNavigate } from "react-router-dom";
import HasLoggedIn from "./HasLoggedIn";
const Redirect = () =>{
    const navigate = useNavigate();
    const isLoggedIn = HasLoggedIn();
    if (isLoggedIn === false) {
      navigate("/login");
    }else{
        navigate("/dashboard/overview")
    }
}
export default Redirect;