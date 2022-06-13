import React, { useState } from "react";
const axios = require("axios");
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import "./error.css";
import styles from "../styles/Home.module.css";

const schema = yup.object().shape({
  name: yup.string().required(),
  enroll: yup.number().required().min(12).max(12),
  mobile: yup.number().required().min(10).max(10),
  password: yup.string().required().min(8),
});

function signup() {
  const router = useRouter();
  const [formobj, setformobj] = useState({
    enroll: "",
    mobile: "",
    name: "",
    password: "",
  });
  const changeformdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformobj((data) => {
      return { ...data, [name]: [value] };
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const run = async () => {
    let data = await axios({
      method: "post",
      url: "http://localhost:3000/api/signup",
      contentType: "application/json",
      headers: {},
      data: formobj,
    });
    if (String(data.status) == "200") {
      router.push("/signin");
    } else {
      alert("invalid");
    }
  };

  const handleOnSubmit = () => {
    console.log(watch("enroll"));
    console.log(watch("name"));
    console.log(watch("mobile"));
    console.log(watch("password"));
  };
  return (
    <div className="container">
      <dive>
        <h5>Welcome to our - BookWorld</h5>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="line">
            <p>
              <label for="name">Full Name</label>
            </p>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div className="line">
            <p>
              <label for="enroll">Enrollment Number</label>
            </p>
            <input type="number" id="enroll" {...register("enroll")} />
            {errors.enroll && (
              <p className={styles.error}>{errors.enroll.message}</p>
            )}
          </div>
          <div className="line">
            <p>
              <label for="mobile">Mobile Number</label>
            </p>
            <input type="number" id="mobile" {...register("mobile")} />
            {errors.mobile && (
              <p className={styles.error}>{errors.mobile.message}</p>
            )}
          </div>
          <div className="line">
            <p>
              <label for="password">Password</label>
            </p>
            <input type="password" {...register("password")} id="password" />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <button type="submit" id="btn">
            Connect ME
          </button>
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

export default signup;
