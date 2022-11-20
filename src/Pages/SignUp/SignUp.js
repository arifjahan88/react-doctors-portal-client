import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const { googleSignin, createUser, updateuser } = useContext(AuthContext);
  const [firebaseerror, setfirebaseerror] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handlesignup = (data) => {
    console.log(data);
    setfirebaseerror("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Create Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateuser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
        setfirebaseerror(err.message);
      });
  };
  const handlegooglelogin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-5 drop-shadow-xl bg-white rounded-xl">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handlesignup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input type="text" className="input input-bordered w-full" {...register("name")} placeholder="You Name" />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password?.message}</p>}
            {firebaseerror && <p className="text-red-600 font-semibold text-xs">{firebaseerror}</p>}

            <label className="label">
              <span className="label-text text-xs link">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-accent w-full text-white" value="submit" type="submit" />
        </form>

        <p className="text-sm text-center my-3">
          Already Have an Account!{" "}
          <Link to="/login" className="text-primary link">
            Please Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button onClick={handlegooglelogin} className="btn btn-outline w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
