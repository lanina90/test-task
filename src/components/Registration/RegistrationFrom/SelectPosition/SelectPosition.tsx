import React from 'react';
import styles from './SelectPosition.module.scss'
import {useFormikContext} from "formik";

interface MyFormValues {
  position: string;
}

const SelectPosition = () => {
  const {values, setFieldValue} = useFormikContext<MyFormValues>();

  return (
      <fieldset className={styles.fieldset}>
        <legend>Select your position:</legend>
        <div>
          <label htmlFor="Frontend developer">
            <input
              type="radio"
              id="Frontend developer"
              name="position"
              value="Frontend developer"
              checked
              onChange={() => setFieldValue("position", "Frontend developer")}
            />
            <span className={styles.radioButton}></span>
            Frontend developer
          </label>
        </div>

        <div>
          <label htmlFor="Backend developer">
            <input
              type="radio"
              id="Backend developer"
              name="position"
              value="Backend developer"
              checked={values.position === "Backend developer"}
              onChange={() => setFieldValue("position", "Backend developer")}
            />
            <span className={styles.radioButton}></span>
            Backend developer
          </label>
        </div>

        <div>
          <label htmlFor="Designer">
            <input
              type="radio"
              id="Designer"
              name="position"
              value="Designer"
              checked={values.position === "Designer"}
              onChange={() => setFieldValue("position", "Designer")}
            />
            <span className={styles.radioButton}></span>
            Designer</label>
        </div>

        <div>
          <label htmlFor="QA">
            <input
              type="radio"
              id="QA"
              name="position"
              value="QA"
              checked={values.position === "QA"}
              onChange={() => setFieldValue("position", "QA")}
            />
            <span className={styles.radioButton}></span>QA</label>
        </div>
      </fieldset>
  );
};

export default SelectPosition;