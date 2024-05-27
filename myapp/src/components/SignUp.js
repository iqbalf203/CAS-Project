import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./SignUp.css";
import UserService from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
function SignUp() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const handleSubmit = async () => {
    const allFieldsValid = !Object.keys(validationErrors).length; // Check if all fields are valid
    if (allFieldsValid && isTermsChecked) {
      try {
        const resp = await UserService.registerUser(newUser);
        console.log("registered");
        toast.success(`${newUser.username} is registered!`);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch (error) {
        if (error.response.status == 400){
          toast.error('Username already exist!')
        }
        console.error("error in registering", error);
      }
    } else {
      console.warn("Form submission prevented due to validation errors.");
    }
  };
  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    setValidationErrors({
      ...validateField(event.target.name, event.target.value),
    });
  };
  const handleCheckboxChange = (event) => {
    setIsTermsChecked(event.target.checked);
  };
  const validateField = (fieldName, fieldValue) => {
    const errors = {};
    switch (fieldName) {
      case "name":
        if (!fieldValue) {
          errors.name = "Please enter your name.";
        } else if (!/^[A-Za-z ]{3,}$/.test(fieldValue)) {
          if (fieldValue.length < 3) {
            errors.name = "Name must be at least 3 characters long."; // Error for name too short
          }
          if (!/^[A-Za-z\s]+$/.test(fieldValue)) {
            errors.name = "Name can only contain letters and spaces."; // Error for non-alphabetic characters
          }
        }
        break;
      case "email":
        if (!fieldValue) {
          errors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fieldValue)) {
          errors.email = "Please enter a valid email address.";
        }
        break;
      case "username":
        if (!fieldValue) {
          errors.username = "Please enter a username.";
        } else if (fieldValue) {
          // Check for username starting with non-alphabet
          if (!/^[a-zA-Z]/.test(fieldValue)) {
            errors.username = "Username must start with an alphabet.";
          } else {
            // Check for only underscore
            if (/^_$/.test(fieldValue)) {
              errors.username = "Only _ is allowed.";
            } else {
              // Check for invalid characters (other than alphabets, numbers, and underscore)
              const usernameRegex = /^[a-zA-Z0-9_]+$/; // Allows alphabets, numbers, and underscores
              if (!usernameRegex.test(fieldValue)) {
                errors.username =
                  "Username can only contain alphabets, numbers, and underscores.";
              } else {
                // Check for minimum length if necessary
                if (fieldValue.length < 6) {
                  errors.username =
                    "Username must be at least 6 characters long.";
                } else {
                  // Username is valid (optional: remove this block if no further checks)
                  // errors.username = ""; // Clear any previous error for username
                }
              }
            }
          }
        }
        break;
      case "phone":
        if (!fieldValue) {
          errors.phone = "Please enter your phone number.";
        } else if (!/^\d{10}$/.test(fieldValue)) {
          errors.phone = "Please enter a valid phone number.";
        }
        break;
      case "password":
        const password = fieldValue;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
          password
        );
        if (password) {
          if (!hasUppercase) {
            errors.password = errors.password
              ? errors.password + " Uppercase letter"
              : "Password must contain an Uppercase letter,"; // Combine or start error message
          }
          if (!hasLowercase) {
            errors.password = errors.password
              ? errors.password + " Lowercase letter, "
              : "Password must contain a Lowercase letter,";
          }
          if (!hasDigit) {
            errors.password = errors.password
              ? errors.password + " Number, "
              : "Password must contain a Number,";
          }
          if (!hasSymbol) {
            errors.password = errors.password
              ? errors.password + " Symbol "
              : "Password must contain a special character (!@#$%^&*...),";
          }
          if (password.length < 8) {
            errors.password = errors.password
              ? errors.password + " and must be at least 8 characters long"
              : "Password must be at least 8 characters long.";
          }
        }
        break;
      case "repeatPass":
        if (!fieldValue) {
          errors.repeatPass = "Please confirm your password.";
        } else if (fieldValue !== newUser.password) {
          errors.repeatPass = "Passwords do not match.";
        }
        break;
      default:
        break;
    }
    return errors;
  };
  const renderPopoverContent = (fieldName) => (
    <Popover id={`popover-${fieldName}`}>
      {/* <Popover.Header as="h3">{fieldName}</Popover.Header> */}
      {/* <Popover.Body>{validationErrors[fieldName]}</Popover.Body> */}
      {validationErrors[fieldName]}
    </Popover>
  );
  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={renderPopoverContent("name")}
            >
              <MDBInput
                wrapperClass="mb-4"
                name="name"
                value={newUser.name}
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
                onChange={handleChange}
                validationState={validationErrors.name ? "invalid" : "valid"}
              />
            </OverlayTrigger>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={renderPopoverContent("email")}
            >
              <MDBInput
                wrapperClass="mb-4"
                name="email"
                value={newUser.email}
                label="Your Email"
                size="lg"
                id="form2"
                type="email"
                onChange={handleChange}
              />
            </OverlayTrigger>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={renderPopoverContent("username")}
            >
              <MDBInput
                wrapperClass="mb-4"
                name="username"
                value={newUser.username}
                label="Username"
                size="lg"
                id="form3"
                type="text"
                onChange={handleChange}
              />
            </OverlayTrigger>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={renderPopoverContent("phone")}
            >
              <MDBInput
                wrapperClass="mb-4"
                name="phone"
                value={newUser.phone}
                label="Phone Number"
                size="lg"
                maxLength="10"
                id="form6"
                type="tel"
                onChange={handleChange}
              />
            </OverlayTrigger>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={renderPopoverContent("password")}
            >
              <MDBInput
                wrapperClass="mb-4"
                name="password"
                value={newUser.password}
                label="Password"
                size="lg"
                id="form4"
                type="password"
                onChange={handleChange}
              />
            </OverlayTrigger>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={renderPopoverContent("repeatPass")}
            >
              <MDBInput
                wrapperClass="mb-4"
                name="repeatPass"
                label="Repeat your password"
                size="lg"
                id="form5"
                type="password"
                onChange={handleChange}
              />
            </OverlayTrigger>
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree to all statements in Terms of service"
                checked={isTermsChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <br />
            <MDBBtn
              className="mb-4 w-100"
              color="info"
              size="lg"
              onClick={handleSubmit}
              disabled={
                !isTermsChecked || !!Object.keys(validationErrors).length
              }
            >
              Register
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <ToastContainer />
    </>
  );
}
export default SignUp;