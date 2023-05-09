import React, { useState, useEffect,useContext } from "react";
import { Button, FormLabel, TextField } from "@mui/material";
import { AuthStyles } from "../styles";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { UserContext } from './../../../Context/UserContext';

const SignInForm = () => {
  const classes = AuthStyles();
  const {userId,setUserId} = useContext(UserContext);
  const initialValues = { username: "", email: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const enable = values.email && values.password;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (name === 'username') {
      setUserId(value);
    }
  };

  //handling errors
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 4) {
      errors.username = "Username must be more than 4 characters";
    } else if (values.username.length > 30) {
      errors.username = "Username cannot exceed 30 characters";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed 15 characters";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log("sigin success");
      swal({
        text: "Sign In is successfull",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
      navigate(`/home`);
    }
  }, [FormErrors, isSubmit]);

  return (
    <>
      <div className={classes.FormContainer}>
        <form onSubmit={handleSubmit}>
          <FormLabel required="true" className={classes.label}>
            Username
          </FormLabel>
          <TextField
            className={classes.textField}
            fullWidth
            name="username"
            value={values.username}
            onChange={handleChange}
            error={FormErrors.username}
            helperText={FormErrors.username}
          />

          <FormLabel required="true" className={classes.label}>
            Email
          </FormLabel>
          <TextField
            className={classes.textField}
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
            error={FormErrors.email}
            helperText={FormErrors.email}
          />

          <FormLabel required="true" className={classes.label}>
            Password
          </FormLabel>
          <TextField
            className={classes.textField}
            fullWidth
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={FormErrors.password}
            helperText={FormErrors.password}
          />

          <span className={classes.submitButton}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "purple" }}
              type="submit"
              disabled={!enable}
            >
              Sign In
            </Button>
          </span>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
