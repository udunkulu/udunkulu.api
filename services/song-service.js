const fsPromises = require('fs').promises;
// const dayjs = require('dayjs');

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

/**
 * @description converts seconds (a decimal-string-number or decimal-number) to minutes
 * @param seconds number or string-number to be converted to minutes example: 293.2325
 * @returns time in minutes: example 00:04:53
 */
exports.secondsToMinute = async (seconds) => {
  // const now = dayjs();

  const date = new Date(0, 0);
  date.setSeconds(+seconds);
  const timeString = date.toTimeString().slice(0, 8);
  // const [hour, minute, _seconds] = timeString.split(':');
  // const newDate = now
  // .hour(Number(hour))
  // .minute(Number(minute))
  // .second(Number(_seconds));

  // console.log(newDate.year(), 
  // newDate.month(), newDate.day(), newDate.hour(), newDate.minute(), newDate.second())
  return timeString;
  // return new Date(date);
};
