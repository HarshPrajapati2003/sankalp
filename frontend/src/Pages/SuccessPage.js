import React, { useContext, useEffect } from "react";
import { UserContext } from "../Components/Context";
import generateReceipt from "../Components/DonationReceipt";

const SuccessPage = () => {
  const { user, reciept } = useContext(UserContext);

  useEffect(() => {
    console.log("reciept status in SuccessPage: ", reciept);
    if (reciept) {
      console.log("Generating receipt...");
      generateReceipt(user.Name, user.Email, user.Phone, user.Amount);
    }
  }, [reciept, user]);

  return (
    <>
      {reciept ? (
        <button disabled>Download Your receipt</button>
      ) : (
        <h2>Please Donate First</h2>
      )}
    </>
  );
};

export default SuccessPage;
