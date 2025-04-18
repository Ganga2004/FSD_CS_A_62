const { Client } = require("pg");
const client = new Client({
    database: "myquizappDB",
    host: "localhost",
    user: "postgres",
    password: "abes@1026",
    port: 5432,
});

client.connect()
    .then(() => {
        console.log("PostgreSQL Connected successfully")
    })
    .catch(err => {
        console.error("DB Error", err.message);
    })

client.query("select * from user1", (err, res) => {
    if (err) {
        console.log("Qurey Error", err.message)
    }
    else {
        console.log("Date with Time:", res.rows[0])
    }
})