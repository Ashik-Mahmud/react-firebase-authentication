

const KeepMeSignIn = (user) =>{
    console.log(user);
    sessionStorage.setItem("uid", user.uid);
}
export default KeepMeSignIn;