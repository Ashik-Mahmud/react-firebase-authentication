import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const thirdPartySignIn = (auth, provider) =>{
    signInWithPopup(auth, provider)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      toast.error(err.message.split(":")[1]);
    });
}



export { thirdPartySignIn };

