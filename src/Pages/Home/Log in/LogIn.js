import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';


const LogIn = () => {
   const {
     register,
     formState: { errors },
     handleSubmit,
   } = useForm();
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate();
   let errorMessage;
    const from = location?.state?.from?.pathname || "/";
  const handleSignIn=()=>{
    signInWithGoogle()
     .then(() =>{
      navigate(from, { replace: true });
    })
  }
  
  if(user){
    console.log(user)
  }
    if(error ||googleError){
      errorMessage = (
        <p className="text-red-600">
          {error?.message || googleError?.message}
        </p>
      );
    }
    if(loading ||googleLoading){
      return <Loading></Loading>
    }
  const onSubmit = (data) =>{
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data.email,data.Password);
  } 
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-center ">
          <h2 class="text-bold text-secondary">Log in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">You Email </span>
              </label>
              <input
                type="email"
                placeholder="Email here"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is reqiured",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "error message",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">You Password </span>
              </label>
              <input
                type="Password"
                placeholder="Password here"
                {...register("Password", {
                  required: {
                    value: true,
                    message: "Password is reqiured",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be more than 6 charecters",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.Password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.Password.message}
                  </span>
                )}
                {errors.Password?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.Password.message}
                  </span>
                )}
              </label>
            </div>
            {errorMessage};
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Log in"
            />
          </form>

          <div class="divider">OR</div>
          <button onClick={handleSignIn} class="btn  bg-secondary btn-success">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;