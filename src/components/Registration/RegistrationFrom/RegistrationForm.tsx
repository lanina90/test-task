import React from 'react';
import styles from './RegistrationFrom.module.scss';
import Button from "../../UIKit/Button/Button";
import {Form, Formik} from "formik";
import Input from "../../UIKit/Input/Input";
import {object} from "yup";
import {
  emailValidationSchema,
  nameValidationSchema,
  photoValidationSchema, positionValidationSchema, phoneValidationSchema
} from "../../../utils/validation/validationSchema";
import SelectPosition from "./SelectPosition/SelectPosition";

const RegistrationForm = () => {

  const validationSchema = object({
    email: emailValidationSchema,
    userName: nameValidationSchema,
    phone: phoneValidationSchema,
    position: positionValidationSchema,
    // photo: photoValidationSchema,
  });

  return (
      <Formik
        initialValues={{
          userName: "",
          email: "",
          phone: "",
          position: "",
          photo: ""
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}>
        {({values, handleBlur, handleChange, errors, touched, isValid}) => {
          return (
            <Form className={styles.registration}>
              <div className={styles.form}>
                <div className={styles.inputs}>
                  <Input
                    name={"userName"}
                    id={"userName"}
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label={'Your name'}
                    error={
                      errors.userName && touched.userName ? errors.userName : undefined
                    }
                  />
                  <Input
                    name={"email"}
                    id={"email"}
                    label={"Email"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.email && touched.email ? errors.email : undefined
                    }
                  />
                  <Input
                    name={"phone"}
                    id={"phone"}
                    label={"Phone"}
                    value={values.phone}
                    text={"+38 (XXX) XXX - XX - XX"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.phone && touched.phone ? errors.phone : undefined
                    }
                  />
                </div>
                <SelectPosition/>
              </div>
              <Button type="submit" variant='yellow'>Sign up</Button>

            </Form>
          )
        }}
      </Formik>

  );
};

export default RegistrationForm;