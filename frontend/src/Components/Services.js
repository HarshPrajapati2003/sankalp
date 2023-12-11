import React, { useContext, useEffect, useState } from "react";
import "../Styles/Services.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash, faSync } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SolutionStep from "./SolutionStep";
// import { PlantData } from "./PlantData";

import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import GoogleSearch from "./Google_Search";
import { useTranslation } from "react-i18next";
import { UserContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, user, setUser, reciept, setReciept } =
    useContext(UserContext);
    const [width, setWidth] = useState(window.innerWidth);
  // useEffect to handle user state changes
  useEffect(() => {
    // console.log("user info: ", user);
    // console.log("reciept : ", reciept);
    console.log("reciept status in Services: ", reciept);
    if (reciept && user.Reciept) {
      console.log("Navigating to /payment...");
      navigate("/payment");
    }
    if (user.Reciept) {
      localStorage.setItem("reciept", user.Reciept)
      localStorage.setItem("name", user.Name);
      localStorage.setItem("amount", user.Amount);
      localStorage.setItem("phone", user.Phone);
      localStorage.setItem("email", user.Email);
    }
    console.log("Local storage : ", localStorage.getItem("reciept"));
    window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  }, [reciept, navigate,user]); // Run this effect whenever user state changes

  const emailVerify =async (email,amount,name) => {
  const res = await axios.post("/api", {email,amount});
    if (res.status === 200) {
      localStorage.setItem("emailstatus",true)
      console.log("email sent successfully");
    } else {
      console.log("please enter valid email address");
    }
  };

  const onSubmit = (data) => {
      setReciept(true);
      setUser({
        Name: data.Name,
        Amount: data.Amount,
        Phone: data.Phone,
        Email: data.Email,
        Reciept:true
      });
    
      console.log("user info : ", user);
      console.log("reciept : ", reciept);
      // emailVerify(localStorage.getItem("email"), localStorage.getItem("amount"), localStorage.getItem("name"));
    };

  return (
    <>
      <br />
      <br />
      <div class="container" id="donate">
        <header class="header">
          <h1 id="title" class="text-center">
            Donation Form
          </h1>
          <p id="description" class="text-center">
            Thank you for taking the time to help us!
          </p>
        </header>
        <div class="form-wrap">
          <form id="survey-form" onSubmit={handleSubmit(onSubmit)}>
            {/* {user && <p>{JSON.stringify(user)}</p>} */}
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label id="name-label" for="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    class="form-control"
                    style={width < 550 ? { width: "84%" } : { width: "100%" }}
                    {...register("Name")}
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label id="email-label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="form-control"
                    style={width < 550 ? { width: "84%" } : { width: "100%" }}
                    {...register("Email")}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label id="number-label" for="number">
                    Donation Amount
                  </label>
                  <input
                    type="number"
                    name="Amount"
                    id="number"
                    class="form-control"
                    style={width < 550 ? { width: "84%" } : { width: "100%" }}
                    placeholder="Enter Amount (eg. 2000)"
                    {...register("Amount")}
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label id="phone-label" for="phone">
                    Mobile No.
                  </label>
                  <input
                    type="number"
                    name="Phone"
                    id="phone"
                    placeholder="Enter your mobile number"
                    class="form-control"
                    style={width < 550 ? { width: "84%" } : { width: "100%" }}
                    {...register("Phone")}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Would you recommend Our Platform to anyone?</label>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline1"
                      value="Definitely"
                      name="recommend"
                      class="custom-control-input"
                      {...register("recommend")}
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline1"
                    >
                      Definitely
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline2"
                      value="Maybe"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline2"
                    >
                      Maybe
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline3"
                      value="Not sure"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadioInline3"
                    >
                      Not sure
                    </label>
                  </div>
                </div>
              </div>

              {/* <div class="col-md-6">
                <div class="form-group">
                  <label>This survey useful yes or no?</label>
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      name="yes"
                      value="yes"
                      id="yes"
                      checked=""
                    />
                    <label class="custom-control-label" for="yes">
                      Yes
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      name="no"
                      value="no"
                      id="no"
                    />
                    <label class="custom-control-label" for="no">
                      No
                    </label>
                  </div>
                </div>
              </div> */}
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>
                    Leave Message<small>(optional)</small>
                  </label>
                  <textarea
                    id="comments"
                    class="form-control"
                    name="comment"
                    style={width < 550 ? { width: "84%" } : { width: "100%" }}
                    placeholder="Type your message here..."
                    {...register("Comment")}
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md">
                <button
                  type="submit"
                  id="submit"
                  class="btn btn-primary btn-block"
                >
                  Donate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Services;
