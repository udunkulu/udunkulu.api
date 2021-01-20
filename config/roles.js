const AccessControl = require('accesscontrol');

const ac = new AccessControl();

const roles = (function r() {
  return ac;
}());

module.exports = {
  ac, roles
};
