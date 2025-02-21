const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    const d = [
        { id: 1, name: "Ashish Bajpai", email: "ab@gmail.com" },
        { id: 2, name: "anti", email: "aa@gmail.com" }
    ];

    if (url === '/users' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(d));
    }
    else if (url === '/users' && req.method === "POST") {
        let body = '';

        req.on("d", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newUser = JSON.parse(body);
                d.push(newUser);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "User added successfully", user: newUser }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "Invalid JSON d or missing fields" }));
            }
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "404 Error: Not Found" }));
    }
});

server.listen(3002, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log("Server running on http://localhost:3002");
    }
});
