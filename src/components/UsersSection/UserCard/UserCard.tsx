import React from 'react';
import styles from './UserCard.module.scss'
import {UserCardProps} from "../../../types/Users";
import {formatPhoneNumber} from "../../../utils/functions/formatPhoneNumber";

const UserCard = ({photo, name, position, email, phone}: UserCardProps) => {

  const phoneFormatted = formatPhoneNumber(phone)

  return (
    <div className={styles.user}>
      <img src={photo} alt={name}/>
      <p>{name}</p>
      <div>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phoneFormatted}</p>
      </div>
    </div>
  );
};

export default UserCard;