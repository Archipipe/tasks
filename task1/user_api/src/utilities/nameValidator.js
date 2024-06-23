function nameValidator(name) {
  name = name.trim();
  const regex = new RegExp("^[a-zA-Z0-9]{2,30}$");
  return regex.test(name) ? name : false;
}
module.exports = nameValidator;
