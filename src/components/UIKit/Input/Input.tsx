import React, {ChangeEvent, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string,
  label: string,
  id: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  className?: string,
  error?: string,
  text?:string
}

const Input = ({
                 type = 'text',
                 value,
                 id,
                 className,
                 error,
                 label, text, ...props
               }: InputProps) => {

  const labelStyle = error ? `${styles.input__label} ${styles.error}` :  styles.input__label
  const fieldStyle = error ? `${styles.input__field} ${styles.error}` :  styles.input__field

  return (

    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.input}>
        <input
          value={value}
          id={id}
          type={type}
          placeholder=""
          className={`${fieldStyle} ${className}`}
          {...props}
        />
        <span className={labelStyle}>{label}</span>
      </label>
      {(text && !error) && <span className={styles.helperText}>{text}</span>}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;