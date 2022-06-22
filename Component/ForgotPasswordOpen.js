import React from "react";
import BlackDrop from "./BlackDrop";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Modal from "./Modal";
import OtpForm from "./OtpForm";

const ForgotPasswordOpen = ({ enroll, setPassbox }) => {
  return (
    <>
      <BlackDrop />
      <Modal>
        <ForgotPasswordForm enroll={enroll} setPassbox={setPassbox} />
      </Modal>
    </>
  );
};

export default ForgotPasswordOpen;
