const fs = require("fs");

module.exports = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;

    process.stdout.write(data);
  });
};
//Question = do we need to account for user inputting a specific file name, and how it will output?
