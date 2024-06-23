function idValidator(id) {
  id = parseInt(id);
  return isNaN(id) || id < 1 ? false : id;
}
module.exports = idValidator;
