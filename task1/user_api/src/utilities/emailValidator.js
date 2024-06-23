function emailValidator(email) {
  email = email.trim();
  const regex = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$");
  return regex.test(email) ? email : false;
}
module.exports = emailValidator;
