import React from "react";
import BlackDrop from "./BlackDrop";
import Modal from "./Modal";
import OtpForm from "./OtpForm";

const OtpVerifyOpen = () => {
  return (
    <>
      <BlackDrop />
      <Modal>
        <OtpForm />
      </Modal>
    </>
  );
};

export default OtpVerifyOpen;
