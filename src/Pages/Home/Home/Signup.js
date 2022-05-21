import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Signup = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
     const location = useLocation();
     const navigate = useNavigate();
     const [createUserWithEmailAndPassword, user, loading, error] =
       useCreateUserWithEmailAndPassword(auth);
     let errorMessage;
     const from = location?.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(data.email, data.password);
  }; 
  if (user) {
    console.log(user);
  }
  if (error ) {
    errorMessage = (
      <p className="text-red-600">{error?.message }</p>
    );
  }
  if (loading ) {
    return <Loading></Loading>;
  }
   const handleSignIn = () => {
     signInWithGoogle()
     .then(() => {
       navigate(from, { replace: true });
     });
   };
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-center ">
          <h2 class="text-bold text-secondary">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name </span>
              </label>
              <input
                type="text"
                placeholder="Name here"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is reqiured",
                  },
                })}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
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
                {...register("password", {
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
              value="Sign up"
            />
          </form>

          <div class="divider">OR</div>
          <button onClick={handleSignIn} class="btn  bg-secondary btn-success">
            Continue with Google
          </button>
          <p>
            Didn't have Any Account?
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;