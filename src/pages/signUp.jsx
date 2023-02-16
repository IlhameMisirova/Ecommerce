import React from "react";
import "./sign.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { basicSchema } from "../schema";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function SignUp() {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [mess, setMess] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(basicSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (data) => {
    await axios
      .post("https://minecard.az/api/moonsun/register", data)
      .then((res) => {
        setMess("Successfully completed");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        setMess("Email address in use");
        setTimeout(() => {
          setMess(" ");
        }, 3000);
      });
    console.log({ data });
    reset();
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="sign">
      <div className="inputs">
        <div className="title"> Sign Up</div>
        <div className="mess">
          <p>{mess}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="up">
            <input
              {...register("fullname")}
              type="text"
              name="fullname"
              placeholder="Full Name"
            />
            <p className="error-message">{errors.fullname?.message}</p>
          </div>

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

          <div className="up">
            <input
              {...register("phone")}
              type="tel"
              name="phone"
              placeholder="Phone"
            />
            <p className="error-message">{errors.phone?.message}</p>
          </div>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
