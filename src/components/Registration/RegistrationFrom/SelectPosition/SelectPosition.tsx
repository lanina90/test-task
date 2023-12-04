import React from 'react';
import styles from './SelectPosition.module.scss'
import {useFormikContext} from "formik";
import {useQuery} from "react-query";
import {getPositions} from "../../../../APIs/usersAPI";

interface MyFormValues {
  position_id: number;
}

type Position = {
  id: number,
  name: string
}
const SelectPosition = () => {
  const {values, setFieldValue} = useFormikContext<MyFormValues>();
  const {data} = useQuery("positions", getPositions)

  return (
      <fieldset className={styles.fieldset}>
        <legend>Select your position:</legend>

        {data?.positions?.map((position: Position)  =>
          <label htmlFor={position.id.toString()} key={position.id}>
            <input
              type="radio"
              id={position.id.toString()}
              name="position"
              value={position.id}
              checked={values.position_id === position.id}
              onChange={() => setFieldValue("position_id", position.id)}
            />
            <span className={styles.radioButton}></span>
            {position.name}
          </label>
        )}
      </fieldset>
  );
};

export default SelectPosition;