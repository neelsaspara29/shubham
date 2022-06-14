import React from "react";
import BlackDrop from "./BlackDrop";
import Modal from "./Modal";
import OtpForm from "./OtpForm";

const OtpVerifyOpen = ({ onSubmit, mobile }) => {
  return (
    <>
      <BlackDrop />
      <Modal>
        <OtpForm onSubmit={onSubmit} mobile={mobile} />
      </Modal>
    </>
  );
};

export default OtpVerifyOpen;
