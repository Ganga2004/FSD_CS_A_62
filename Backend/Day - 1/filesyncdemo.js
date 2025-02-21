const fs = require("node:fs");

function myReadFile() {
    try {
        const data = fs.readFileSync("./Dummy.txt", "utf8");
        console.log("File Content:", data);
    } catch (err) {
        console.error("Error reading file:", err.message);
    }
}

function myWriteFile() {
    const data = "My name is Lakhan";
    fs.writeFileSync("./Dummy.txt", data);
    console.log("File written successfully.");
}

function myDeleteFile() {
    try {
        fs.unlinkSync("./Dummy.txt");
        console.log("File deleted successfully.");
    } catch (err) {
        console.error("Error deleting file:", err.message);
    }
}