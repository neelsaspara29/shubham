import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import OtpInput from "react-otp-input";
import axios from "axios";
import ForgotPasswordOpen from "./ForgotPasswordOpen";

const ForgotForm = ({ enroll, setOtpForm, setPasswordBox }) => {
  const [invalid, setInvalid] = useState(false);
  const [forgotform, setForgotform] = useState(false);

  const [message, setMessage] = useState();
  const [otp, setOtp] = useState();
  //   const [] = useFocus();

  const generated = async () => {
    console.log(enroll, otp);
    if (!otp) {
      setMessage("please enter code in given box");
    }
    const data = await axios({
      method: "post",
      url: "http://localhost:3000/api/forgotVerify",
      contentType: "application/json",
      headers: {},
      data: {
        code: otp,
        enroll: enroll,
      },
    });

    if (String(data.status) == "200") {
      setOtpForm(false);
      setPasswordBox(true);
    }

    if (String(data.status) == "210") {
      // setInvalid(true);
    }

    if (String(data.status) == "215") {
      setMessage("Invalid otp entered!");
    }
  };

  const handleOnSubmit = () => {
    // generated();
    generated();
    console.log("heelooo");
  };

  return (
    <>
      <div>
        {/* {invalid && <p style={{ color: "white" }}>Invalid Otp Try again</p>} */}
        {/* {forgotform && <ForgotPasswordOpen />} */}
        {message && <p style={{ color: "blue" }}>{message}</p>}
        <OtpInput
          value={otp}
          onChange={(otp) => {
            // console.log(otp)
            setOtp(otp);
          }}
          inputStyle={{
            width: "60px",
            height: "60px",
            fontSize: "25px",
          }}
          numInputs={4}
          separator={<span>-</span>}
        />
        <button onClick={handleOnSubmit}>Verify</button>
      </div>
    </>
  );
};

export default ForgotForm;
