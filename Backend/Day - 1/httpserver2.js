const http = require("http");

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;

    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const datajson = await response.json(); 
        const dataarray = datajson.recipes || [];
        dataarray.map((recipe) => {
            const data = "<h3>"+recipe.name+"</h3>"
            res.write(data);
        });

        res.end(JSON.stringify(names));
    } catch (error) {
        res.statusCode = 500;
        res.end( "Failed to fetch data" );
    }
});

server.listen(3001, (err) => {
    if (err) {
        console.log("Server error:", err.message);
    } else {
        console.log("Server is running on port 3001");
    }
});
