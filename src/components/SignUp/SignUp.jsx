import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Redirect from "../../utilities/Redirect";
import { auth } from "../Firebase/Firebase.config";
import ThirdParty from "../ThirdPartySignIn/ThirdParty";
const SignUp = () => {
  Redirect();

  /* for sign up */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /*  form ref */
  const formRef = useRef(null);
  /* handle sign up  */
  const handleSignUp = (event) => {
    event.preventDefault();
    if (!name) return toast.error("Name field is required.");
    if (!email) return toast.error("Email field is required.");
    if (!password) return toast.error("Password field is required.");
    if (!confirmPassword)
      return toast.error("Confirm Password field is required.");
    if (password !== confirmPassword)
      return toast("Password not matched.", { type: "error" });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        /*update user profile*/
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        }).then(() => {
          toast.success("User profile updated");
        });
        toast.success("User created successfully.");
        /*sent verification email */
        sendEmailVerification(auth.currentUser).then(() => {
          toast.success(`Send email for verification to ${email}`);
        });

        /* reset form  */
        formRef.current.reset();
        console.log(userCredential.user);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message.split(":")[1]);
      });
  };

  return (
    <SignUpContainer>
      <div className="login-container">
        <div className="wrapper">
          <h1>
            Sign Up into<span className="colorize"> Account</span>
          </h1>
          <form action="#" onSubmit={handleSignUp} ref={formRef}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onBlur={(event) => setName(event.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onBlur={(event) => setEmail(event.target.value)}
                placeholder="Email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                onBlur={(event) => setConfirmPassword(event.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="input-group">
              <button className="btn">Sign Up into Account</button>
            </div>
            <ThirdParty />
            <div className="actions">
              <p>
                Already have Account? <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </SignUpContainer>
  );
};
const SignUpContainer = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 90vh;
  .wrapper {
    width: 400px;
    padding: 2rem;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    position: relative;
    border-radius: 5px;
    h1 {
      margin-bottom: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 1rem;
      .input-group {
        position: relative;
        input {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 1rem;
          border-radius: 5px;
          border: 2px solid #ccc;
          outline: none;
          margin-top: 0.3rem;
          &:focus {
            border: 2px solid var(--main-color);
          }
        }
      }
    }
    .others-login {
      text-align: center;
      .btn-groups {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 0.3rem;
        button {
          border: 1px solid var(--main-color);
          color: var(--main-color);
          background: transparent;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
            background-color: var(--main-color);
            color: var(--accent-color);
          }
        }
      }
    }
    .or {
      position: relative;
      text-align: center;
      margin: 0.6rem 0rem;
      color: var(--main-color);
      text-transform: capitalize;
      &::after,
      &::before {
        content: "";
        width: 45%;
        height: 1px;
        background: var(--main-color);
        display: block;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        right: 0;
      }
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-top: 0.5rem;
      a {
        font-weight: bold;
        color: var(--main-color);
      }
      span {
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
`;
export default SignUp;
