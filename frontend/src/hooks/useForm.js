import { useState, useEffect } from "react";

const useForm = (validator) => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    setErrors(validator(values));
    if (Object.keys(errors).length === 0) {
        try {
            setIsLoading(true)
            const response = await fetch("http://localhost:5000/api/v1/signup", {
               method: "PUT",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
                 name: values.name,
                 lastname: values.lastname,
                 email: values.email,
                 password: values.password,
                 confirmpassword: values.confirmPassword,
               }),
             });
            setIsLoading(false)
          } catch (err) {
            console.log(err)
            setIsLoading(false)
          }
    }
  };

  return { onChangeHandler, onSubmitHandler, values, errors,isLoading };
};

export default useForm;
