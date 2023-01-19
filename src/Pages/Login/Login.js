import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/UseToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { googleSignin, login } = useContext(AuthContext);
  const [loginuserEmail, setloginuserEmail] = useState("");
  const [token] = useToken(loginuserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replece: true });
  }

  const handlelogin = (data) => {
    console.log(data.email);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setloginuserEmail(data.email);
      })
      .catch((err) => {
        console.error(err);
        seterror(err.message);
      });
  };

  const handlegooglelogin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        setloginuserEmail(user.email);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-5 drop-shadow-xl bg-white rounded-xl">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handlelogin)}>
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
            <p className="text-red-600">{error}</p>
            {errors.password && (
              <p className="text-red-600 text-xs mt-1">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text text-xs link">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-accent w-full text-white" value="submit" type="submit" />
        </form>
        <p className="text-sm text-center my-3">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-primary link">
            Create new Account
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

export default Login;
