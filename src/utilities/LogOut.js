import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../components/Firebase/Firebase.config";

const LogOut = () => {
    signOut(auth).then(() => {
        toast.success("Log Out successfully!");
    });
}

export default LogOut