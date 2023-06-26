export const validateSteponeForm = (values) => {
  let error = {};

  if (!values.name) {
    error.name = "This field is required";
  }

  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    error.email = "incorrect email address";
  }
  if (!values.email) {
    error.email = "This field is required";
  }

  if (!values.phone) {
    error.phone = "This field is required";
  }
  if (isNaN(parseInt(values.phone))) {
    error.phone = "phone number required";
  }

  return error;
};
