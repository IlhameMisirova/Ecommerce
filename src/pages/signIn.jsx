import React from "react";
import "./sign.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { entryData } from "../store/reducer/cartSlice";
import { useDispatch } from "react-redux";

function SignIn() {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [mess, setMess] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (data) => {
    await axios
      .post("https://minecard.az/api/moonsun/login", data)
      .then((res) => {
        localStorage.setItem("token", res?.data?.data?.token);
        getUserData();
        console.log(res);
      })
      .catch((err) => {
        setMess("Incorrect email address or password");
        setTimeout(() => {
          setMess(" ");
        }, 3000);
      });
  };
  async function getUserData() {
    try {
      const response = await axios.get("https://minecard.az/api/moonsun/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response);
      navigate("/");
      dispatch(entryData(response?.data?.data?.user?.fullname));
    } catch (error) {
      console.log(error);
    }
  }
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="sign">
      <div className="inputs">
        <div className="title"> Sign In</div>
        <div className="mess">
          <p>{mess}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="up">
            <input
              {...register("email")}
              type="text"
              name="email"
              placeholder="Email"
            />
            <p className="error-message">{errors.email?.message}</p>
          </div>
          <div className="up">
            <input
              {...register("password")}
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
            />{" "}
            <RemoveRedEyeOutlinedIcon
              className="eye"
              onClick={togglePassword}
            />
            <p className="error-message">{errors.password?.message}</p>
          </div>
          <input type="submit" value="Sign In" />
        </form>
        <div className="account ">
          <p>Don't have an account?</p>
          <Link to={"/signup"}>
            <p className="link">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
