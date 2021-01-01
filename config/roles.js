const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function r() {
  ac.grant('user')
    .readOwn('userAccount')
    .updateOwn('userAccount');

  ac.grant('admin').extend('user')
    .createAny('userAccount');

  ac.grant('superadmin').extend('admin')
    .updateAny('userAccount')
    .deleteAny('userAccount');

  return ac;
}());
