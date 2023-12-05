import React from 'react';
import styles from './UserCard.module.scss'
import {UserCardProps} from "../../../types/Users";
import {formatPhoneNumber} from "../../../utils/functions/formatPhoneNumber";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const UserCard = ({photo, name, position, email, phone}: UserCardProps) => {

  const phoneFormatted = formatPhoneNumber(phone)

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(0, 0, 0, 0.87)',
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 16,
      fontFamily: 'Nunito',
      fontWeight: 400,
      padding: '3px 16px',
      marginTop: 1
    },
  }));
  return (
    <>
      <div className={styles.user}>
        <img src={photo} alt={name} />
        <LightTooltip title={name} placement="bottom-end">
          <p>{name}</p>
        </LightTooltip>
        <div>
          <LightTooltip title={position} placement="bottom-end">
            <p>{position}</p>
          </LightTooltip>
          <LightTooltip title={email} placement="bottom-end">
            <p>{email}</p>
          </LightTooltip>
          <LightTooltip title={phoneFormatted} placement="bottom-end">
            <p>{phoneFormatted}</p>
          </LightTooltip>
        </div>
      </div>
    </>
  );
};

export default UserCard;