const fsPromises = require('fs').promises;

// delete a  file
exports.deleteFile = async (file) => {
  // const filePath = `${lib.baseDir + dir}\\${filename}.json`;
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
