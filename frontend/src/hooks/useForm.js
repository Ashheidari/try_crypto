import { useState, useEffect } from "react";
import  useHttpClient  from "./http-hook";

const useForm = (validator) => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const {isLoading,backendError, sendRequest ,clearError} = useHttpClient();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors(validator(values));
    if (Object.keys(errors).length === 0) {
      try {
        await sendRequest(
          "http://localhost:5000/api/v1/signup",
          "PUT",
          JSON.stringify({
            name: values.name,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            confirmpassword: values.confirmPassword,
          }),
          { "Content-Type": "application/json" }
        );
      } catch (err) {}
    }
  };

  return {
    onChangeHandler,
    onSubmitHandler,
    values,
    errors,
    isLoading,
    backendError,
    clearError
  };
};

export default useForm;
