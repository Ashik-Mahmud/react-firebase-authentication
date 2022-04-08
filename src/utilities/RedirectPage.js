import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RedirectPage = (slug) =>{
    const navigate = useNavigate();
    const uid = sessionStorage.getItem("uid");

  useEffect(() => {
    if (uid === null) {
        if(slug === 'dashboard'){
            navigate("/login");
        }
    } else {
      navigate("/dashboard/overview");
    }
  }, [uid, slug, navigate]);
   
}
export default RedirectPage;