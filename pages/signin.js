import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  enroll: yup.string().required().min(12).max(12),
  password: yup.string().required().min(8),
});

function signin() {
  const router = useRouter();
  const [formobj, setformobj] = useState({ enroll: "", password: "" });
  const changeformobj = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformobj((data) => {
      return { ...data, [name]: [value] };
    });
  };

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const run = async () => {
    let signin_res = await axios({
      method: "post",
      url: "http://localhost:3000/api/signin",
      contentType: "application/json",
      headers: {},
      data: {
        enroll: watch("enroll"),
        password: watch("password"),
      },
    });
    if (String(signin_res.status) == "200") {
      router.push("/books?dep=" + "Computer Engineering");
    } else {
      alert("invalid");
    }
  };

  const handleOnSubmit = () => {
    run()
  };
  return (
    <div className="container">
      <dive>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="line">
            <p>
              <label for="enroll">Enrollment Number</label>
            </p>
            <input type="text" id="enroll" {...register("enroll")} />
            {errors.enroll && (
              <p style={{ color: "red" }}>{errors.enroll.message}</p>
            )}
          </div>
          <div>
            <p>
              <label for="userNmae">Password</label>
            </p>
            <input type="password" id="password" {...register("password")} />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>
          <button type="submit" id="btn">
            Sign in Now
          </button>
          <p>
            Not a register user?{" "}
            <Link href={"/signup"}>
              <span className="signUPbtn"> Sign Up</span>
            </Link>
          </p>
          <p>
            Forgot Password?{" "}
            <Link href={"/signup"}>
              <span className="signUPbtn"> Sign Up</span>
            </Link>
          </p>
        </form>
      </dive>
      <div className="section2">
        <img
          src="https://www.hmablogs.com/wp-content/uploads/2021/07/musicImg.png"
          alt="Music Image"
        />
      </div>
    </div>
  );
}

export default signin;
