import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'yellow',
  className?: string,
  children: ReactNode,
  disabled?: boolean
}
const Button = ({children, className, variant, disabled, ...props}: ButtonProps) => {

  const variantStyle = {
    yellow: styles.yellowBtn
  }

  return (
    <button
      className={`${variantStyle[variant]} ${className} ${disabled ? styles.disabled : ""}` }  {...props}>
      {children}
    </button>
  );
};

export default Button;