import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { thirdPartySignIn } from "../../utilities/saveUserInfo";
import { auth } from "../Firebase/Firebase.config";
const ThirdParty = ({ setUsers, setIsAuth }) => {
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    thirdPartySignIn(auth, provider, setUsers, setIsAuth);
  };

  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    thirdPartySignIn(auth, provider, setUsers, setIsAuth);
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    thirdPartySignIn(auth, provider, setUsers, setIsAuth);
  };
  const handleTwitterSignIn = () => {
    console.log("object");
  };
  return (
    <div className="others-login">
      <div className="or">or</div>
      <div className="btn-groups">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          title="Google Sign In"
        >
          <AiFillGoogleCircle />
        </button>
        <button
          onClick={handleGithubSignIn}
          type="button"
          title="Github Sign In"
        >
          <AiFillGithub />
        </button>
        <button
          onClick={handleFacebookSignIn}
          type="button"
          title="Facebook Sign In"
        >
          <AiFillFacebook />
        </button>
        <button
          onClick={handleTwitterSignIn}
          type="button"
          title="Twitter Sign In"
        >
          <AiFillTwitterCircle />
        </button>
      </div>
    </div>
  );
};

export default ThirdParty;
