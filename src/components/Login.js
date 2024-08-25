import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="background"
        />
      </div>
      <form className="text-white absolute p-12 bg-black mx-auto w-3/12 my-36 right-0 left-0 rounded-md bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-transparent border bg-opacity-80 border-slate-300 rounded-md"
          />
        )}

        {!isSignInForm && (
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 my-2 w-full bg-transparent border bg-opacity-80 border-slate-300 rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-transparent border bg-opacity-80 border-slate-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-transparent border bg-opacity-80 border-slate-300 rounded-md"
        />
        <button className="p-2 my-2 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix GPT? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
