import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ForgotFormOpen from "../Component/ForgotFormOpen";
import axios from "axios";
import styles from "../styles/Home.module.css";
import ForgotPasswordOpen from "../Component/ForgotPasswordOpen";

const schema = yup.object().shape({
  enroll: yup.string().min(12).max(12),
});

const forgotpassword = () => {
  const [otpBox, setOtpBox] = useState(false);
  const [passwordbox, setPasswordbox] = useState(false);
  const [message, setMessage] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const generated = async () => {
    const data = await axios({
      method: "post",
      url: "http://localhost:3000/api/forgotgenerate",
      contentType: "application/json",
      headers: {},
      data: {
        enroll: watch("enroll"),
      },
    });

    if (String(data.status) == "200") {
      setOtpBox(true);
    }

    if (String(data.status) == "210") {
      setMessage("No user with this credentials exist in system");
    }
  };

  const handleOnSubmit = () => {
    generated();
  };

  return (
    <>
      {otpBox && (
        <ForgotFormOpen
          enroll={watch("enroll")}
          setOtpForm={setOtpBox}
          setPasswordBox={setPasswordbox}
        />
      )}
      {/* {otpBox && <ForgotFormOpen />} */}
      {passwordbox && (
        <ForgotPasswordOpen
          enroll={watch("enroll")}
          setPassbox={setPasswordbox}
        />
      )}
      <h1>Forgot Password</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <label>Enrollment Number</label>
        <input {...register("enroll")} />
        {errors.enroll && (
          <p className={styles.error}>{errors.enroll.message}</p>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default forgotpassword;
