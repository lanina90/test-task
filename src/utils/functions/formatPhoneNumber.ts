export const formatPhoneNumber = (phoneNumber : string)=> {
  phoneNumber = phoneNumber.replace(/\D/g, '');
  if (phoneNumber.length === 12) {
    return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10, 12)}`;
  }

  return phoneNumber;

}


export const formatNumberValue = (value : string)=> {
  let phoneNumber = value.replace(/[^\d]/g, '');

  if (phoneNumber.startsWith('38')) {
    phoneNumber = phoneNumber.slice(2);
  }

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return `+38 (${phoneNumber}`;
  if (phoneNumberLength < 7) return `+38 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  if (phoneNumberLength < 9) return `+38 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6)}`;
  return `+38 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6, 8)} - ${phoneNumber.slice(8, 10)}`;

}