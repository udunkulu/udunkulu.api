const { roles } = require('../config/roles');

exports.grant = (action, resource) => async (req, res, next) => {
  const permission = await roles.can(req.user.role)[action](resource);
  if (!permission.granted) {
    return res.status(401).send('Permission denied');
  }
  return next();
};
