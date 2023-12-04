import * as Yup from "yup";

const phoneNumberRegExp = /^\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}$/;

export const emailValidationSchema = Yup.string()
  .email("Enter valid email")
  .matches(
    /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Enter valid email"
  )
  .required("Required field");

export const nameValidationSchema = Yup.string()
  .required("Required field");

export const photoValidationSchema = Yup.mixed()
  .required("Required field");


export const positionValidationSchema = Yup.string()
  .required("Required field");

export const phoneValidationSchema = Yup.string()
    .matches(phoneNumberRegExp, 'Use format +38 (XXX) XXX - XX - XX')
  .required("Required field");
