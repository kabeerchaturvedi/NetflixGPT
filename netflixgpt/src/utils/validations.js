export const HandleValidations = (email, password) => {
  let emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  let passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailValidation) {
    return "Email ID is not valid";
  }

  if (!passwordValidation) {
    return "Kindly choose password according to required format.";
  }
};
