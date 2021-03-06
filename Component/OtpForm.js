import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import OtpInput from "react-otp-input";
import axios from "axios";

const OtpForm = ({ onSubmit, mobile }) => {
  const [invalid, setInvalid] = useState(false);
  const [otp, setOtp] = useState();
  //   const [] = useFocus();

  const generated = async () => {
    const data = await axios({
      method: "post",
      url: "http://localhost:3000/api/verifyotp",
      contentType: "application/json",
      headers: {},
      data: {
        code: otp,
        mobile: mobile,
      },
    });

    if (String(data.status) == "200") {
      console.log("ok");

      onSubmit();
    }

    if (String(data.status) == "210") {
      setInvalid(true);
    }
  };

  const handleOnSubmit = () => {
    generated();
  };

  return (
    <>
      <div>
        {invalid && <p style={{ color: "white" }}>Invalid Otp Try again</p>}
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

export default OtpForm;
