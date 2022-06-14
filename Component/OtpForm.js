import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import OtpInput from "react-otp-input";

const OtpForm = () => {
  const [otp, setOtp] = useState();
  //   const [] = useFocus();

  const handleOnSubmit = () => {
    console.log(otp);
  };

  return (
    <>
      <div>
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
