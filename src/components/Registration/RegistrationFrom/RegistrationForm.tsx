import React, {useState} from 'react';
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
import ImageInput from "./ImageInput/ImageInput";
import {postUser} from "../../../APIs/usersAPI";
import Success from "../Success/Success";
import {useMutation, useQueryClient} from "react-query";
import {formatNumberValue} from "../../../utils/functions/formatPhoneNumber";



const RegistrationForm = ({setCollapsePages} : {setCollapsePages:  React.Dispatch<React.SetStateAction<boolean>>}) => {
  const queryClient = useQueryClient();
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<string | null>("")

  const validationSchema = object({
    email: emailValidationSchema,
    name: nameValidationSchema,
    phone: phoneValidationSchema,
    position_id: positionValidationSchema,
    photo: photoValidationSchema,
  });

  const createUser = useMutation(postUser, {
    onSuccess: () => {
      setSuccess(true);
      queryClient.invalidateQueries('users');
      setCollapsePages(true)
    },
    onError: (error: Error) => {
      setErrors(error.message);
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position_id: 1,
          photo: ""
        }}
        onSubmit={ async (values, {resetForm}) => {
          try{
            const {phone, ...rest} = values;
            const cleanedPhoneNumber = phone.replace(/\D/g, '');
            const formattedPhoneNumber = `+${cleanedPhoneNumber}`;
            const dataValues = {
              phone: formattedPhoneNumber,
              ...rest
            }
            await createUser.mutateAsync(dataValues);
            resetForm();
          } catch (e: any) {
           setErrors(e.message)
          }
        }}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}>
        {({values, setFieldTouched, setFieldValue, handleBlur, handleChange, errors, touched, isValid}) => {
          return (
            <Form className={styles.registration}>
              <div className={styles.form}>
                <div className={styles.inputs}>
                  <Input
                    name={"name"}
                    id={"name"}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label={'Your name'}
                    error={
                      errors.name && touched.name ? errors.name : undefined
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
                    onChange={(e) => {
                      e.target.value = formatNumberValue(e.target.value);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    error={
                      errors.phone && touched.phone ? errors.phone : undefined
                    }
                  />
                </div>
                <SelectPosition/>
                <ImageInput
                  onChange={(photo) => {
                    setFieldValue("photo", photo).then(() => setFieldTouched("photo", true))
                  }}
                  error={errors.photo ? errors.photo : undefined}
                />
              </div>
              <Button type="submit" variant='yellow'
                      disabled={!isValid || (
                        !touched.email &&
                        !touched.name &&
                        !touched.position_id &&
                        !touched.phone
                      )}
              >Sign up</Button>
            </Form>
          )
        }}
      </Formik>
      {success && <Success/>}
      {errors && <span style={{color: "red"}}>{errors}</span>}
    </>


  );
};

export default RegistrationForm;