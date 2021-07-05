const validator = (values) => {
    let errors = {};
    if (!values.name.trim()) {
        errors.name = "Name is required";
    }
    if (!values.lastname.trim()) {
        errors.lastname = "Lastname is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            values.email
        )
    ) {
        errors.email="Enter a Valid Email Address"
    }
    if(!values.password){
        errors.password = "Password is required"

    }else if(values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "Confirm password is required"
    }else if(values.confirmPassword!==values.password){
        errors.confirmPassword = "passwords do not match"
    }

    return errors
};

export default validator