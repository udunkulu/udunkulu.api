const fsPromises = require('fs').promises;

// delete a  file
/**
 * @description delete a file
 * @param {Object} file is the object req.file contain file info
 * @returns boolean
 */
exports.deleteFile = async (file) => {
  // if the file exist
  try {
    await fsPromises.access(file.path);
    await fsPromises.unlink(file.path);

    return true;
  } catch (error) {
    // try is used here to avoid unnecessary error when a file does not exist
    return false;
  }
};
