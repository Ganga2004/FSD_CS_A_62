const { myWriteFile, myReadFile, username, myAppendFile, myDeleteFile } = require('./filesyncdemo');

console.log("User Name =", username);

myWriteFile();
myReadFile();
myAppendFile();
myDeleteFile();
