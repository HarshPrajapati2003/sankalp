import React, { useContext } from 'react'
import "../Styles/Toast.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faAngleUp,
  faGift,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from './Context';
import generateReceipt from './DonationReceipt';
const Toast = () => {
    const { register, handleSubmit, user, setUser, reciept, setReciept } =
      useContext(UserContext);
    const downloadReciept = () => {
        generateReceipt(
          localStorage.getItem("name"),
          localStorage.getItem("email"),
          localStorage.getItem("phone"),
          localStorage.getItem('amount')
        );
    }
  return (
    <>
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-sm-offset-3">
            <div class="new-message-box">
              <div class="new-message-box-warning">
                <div class="info-tab tip-icon-warning" title="error">
                  <i>{/* <FontAwesomeIcon icon={faGift} /> */}</i>
                </div>
                <div class="tip-box-warning">
                  <p>
                    <strong>Thank You for Your Generosity!</strong>
                  </p>
                  <p>
                    Your support is invaluable and helps us make a positive
                    impact. Together, we can create lasting change and empower
                    those in need. Gratitude! Download your Donation receipt for your
                    records.
                  </p>
                  <button
                    className="text-appointment-btn"
                    type="button"
                    onClick={downloadReciept}
                    style={{ padding:"5px 8px",fontSize:"17px" , marginBottom:"5px" }}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Receipt
                  </button>
                  {/* <button >Download</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toast
