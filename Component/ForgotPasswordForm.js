import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import OtpInput from "react-otp-input";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  password: yup.string().required().min(8),
  cpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password not matched"),
});

const ForgotPasswordForm = ({ enroll, setPassbox }) => {
  const [invalid, setInvalid] = useState(false);
  const [otp, setOtp] = useState();
  //   const [] = useFocus();

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
      url: "http://localhost:3000/api/forgotpassword",
      contentType: "application/json",
      headers: {},
      data: {
        enroll: enroll,
        password: watch("password"),
      },
    });

    if (String(data.status) == "200") {
      console.log("ok");
    }

    if (String(data.status) == "210") {
      // setInvalid(true);
    }
  };

  const handleOnSubmit = () => {
    generated();
  };

  return (
    <>
      <div>
        {/* {invalid && <p style={{ color: "white" }}>Invalid Otp Try again</p>} */}

        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <label>New Password</label>
          <input {...register("password")} />
          {errors.password && (
            <p style={{ color: "blue" }}>{errors.password.message}</p>
          )}
          <label>Confirm Password</label>
          <input {...register("cpassword")} />
          {errors.cpassword && (
            <p style={{ color: "blue" }}>{errors.cpassword.message}</p>
          )}

          <button type="submit">Verify</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
