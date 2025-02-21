const http = require("http");
const users = [];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/users" && method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }
    else if (url === "/users" && method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            try {
                const parsedData = JSON.parse(body);
                const { name, email } = parsedData;
                if (!name || !email) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ message: "Name and Email are required!" }));
                }
                const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
                users.push({ id, name, email });

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "User created", user: { id, name, email } }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Invalid JSON data" }));
            }
        });
    }
    else if (url.startsWith("/user/") && method === "DELETE") {
        const userId = parseInt(url.split("/")[2]);
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "User not found" }));
            return;
        }

        users = users.filter(u => u.id !== userId);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User deleted!" }));
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

server.listen(3000, (err) => {
    if (err) {
        console.error("Error:", err.message);
    } else {
        console.log("Server running on port 3000");
    }
});
