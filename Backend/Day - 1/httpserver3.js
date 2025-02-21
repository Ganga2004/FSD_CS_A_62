const http = require('http');

const server = http.createServer((req, res) => {
    const jsondata = [
        { id: 1, name: "G", email: "g4@gmail.com" },
        { id: 2, name: "a", email: "a@gmail.com" },
        { id: 3, name: "n", email: "n@gmail.com" }
    ];

    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;

    jsondata.forEach((da) => {
        res.write("<h3>" + da.name + "</h3>");
        res.write("<p>" + da.email + "</p>");
    });

    res.end(); 
});

server.listen(3000, (error) => {
    if (error) {
        console.log("Server error:", error.message);
    } else {
        console.log('Server is running on port 3000');
    }
});
