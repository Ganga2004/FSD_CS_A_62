const express = require("express")

const app = express()
const PORT = 3000

let users = []

app.get("/users", (req, res) => {
    res.status(200).json(users)
})
app.get("/user/:id", (req, res) => {
    const uid = req.params.id
    const idx = users.findIndex(user => user.id === uid)
    if (idx === -1) {
        res.status(404).json({ message: "User not found!" })
    } else {
        res.status(200).json({ message: "User found", data: users[idx] })
    }
})
app.post("/createuser", (req, res) => {
    const { name: newName, email: newEmail } = req.body
    if (!newName || !newEmail) {
        res.status(400).json({ message: "Incomplete input data!" })
    } else {
        const newId = Date.now()
        const newUser = {
            id: newId,
            name: newName,
            email: newEmail
        }
        users.push(newUser)
        res.status(201).json({ message: "User created successfully!", data: newUser })
    }
})
app.put("/edituser/:id", (req, res) => {
    const uid = req.params.id
    const { name: newName, email: newEmail } = req.body
    if (!newName || !newEmail) {
        res.status(400).json({ message: "Invalid data" })
    } else {
        const idx = users.findIndex(user => user.id === uid)
        if (idx === -1) {
            res.status(404).json({ message: "User not found!" })
        } else {
            users[idx].name = newName
            users[idx].email = newEmail
            res.status(200).json({ message: "User updated successfully!", data: users[idx] })
        }
    }
})
app.delete("/user/:id", (req, res) => { })

app.listen(PORT, (err) => {
    try {
        if (err) throw err
        console.log(`Server running on port ${PORT}`)
    } catch (err) {
        console.log("Server Error: ", err.message)
    }
})             