export const formatPhoneNumber = (phoneNumber : string)=> {
  phoneNumber = phoneNumber.replace(/\D/g, '');
  if (phoneNumber.length === 12) {
    return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10, 12)}`;
  }

  return phoneNumber;

}