const http = require('http');
const server = http.createServer(async (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const response = await fetch('https://api.github.com/search/users?q=location:ghaziabad');
        const data = await response.json();
        const d  = data.items;
        d.map((user) => {
            res.write(`<img src="${user.avatar_url}" width="100" height="100" style="margin:10px;"/>`);
        });

        res.end();
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

server.listen(3000, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log("Server running on http://localhost:3000");
    }
});
