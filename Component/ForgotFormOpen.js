import React from "react";
import BlackDrop from "./BlackDrop";
import ForgotForm from "./ForgotForm";
import Modal from "./Modal";
import OtpForm from "./OtpForm";

const ForgotFormOpen = ({ enroll, setOtpForm, setPasswordBox }) => {
  return (
    <>
      <BlackDrop />
      <Modal>
        <ForgotForm
          setOtpForm={setOtpForm}
          enroll={enroll}
          setPasswordBox={setPasswordBox}
        />
      </Modal>
    </>
  );
};

export default ForgotFormOpen;
