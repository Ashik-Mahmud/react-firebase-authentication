import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RedirectPage = (isAuth) =>{
    const navigate = useNavigate();
   
  useEffect(() => {
    if (!isAuth) {
        navigate("/login");   
    } else {
      navigate("/dashboard/overview");
    }
  }, [isAuth, navigate]);
   
}
export default RedirectPage;