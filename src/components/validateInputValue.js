import { isValidPhoneNumber } from "react-phone-number-input";

export const validateInputValue = (values) => {
  let error = {};
  const { name, email, phone } = values;
  // regex for name and email
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regName = /^[A-Za-z]+(?:\s[A-Za-z]+)?\s[A-Za-z]+$/;

  if (!name) {
    error.name = "This field is required";
  }

  if (name && !regName.test(name)) {
    error.name = "Invalid input. Enter full name e.g john doe";
  }

  if (!email) {
    error.email = "This field is required";
  }

  if (email && !regEmail.test(email)) {
    error.email = "Invalid email address";
  }

  if (!phone) {
    error.phone = "This field is required";
  }

  if (phone && !isValidPhoneNumber(phone)) {
    error.phone = "Invalid phone number";
  }

  return error;
};
