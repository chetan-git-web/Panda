export const validateUser = (email, password) => {
  console.log(email);
  console.log(password);

  if (email != null) {
    const emailvalidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!emailvalidate) return "email is invalid";
  }
  if (password != null) {
    const passwordvalidate =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!passwordvalidate) return "password is invalid";
  }
  else return null;
};
