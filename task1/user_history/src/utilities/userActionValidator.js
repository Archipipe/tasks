function userActionValidator(userAction) {
  const Actions = ["create", "update"];
  userAction = userAction.trim();
  return Actions.includes(userAction) ? userAction : false;
}
module.exports = userActionValidator;
