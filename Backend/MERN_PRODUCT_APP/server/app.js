const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const products = [{
    id: 1001,
    title: "laptop",
    price: 50000,
    brand: "HP",
    quantity: 5
}, {
    id: 1002,
    title: "laptop",
    price: 50000,
    brand: "Dell",
    quantity: 6
}]
app.get("/products", (req, res) => {
    res.status(200);
    res.json(products);
})
app.get("/products/:id", (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex((product) => product.id == pid);
    if (index != -1) {
        res.status(200).json(products[index]);
    } else {
        res.status(404).json({ status: "fail", message: "Product not found" });
    }
})
app.post("/createproduct", (req, res) => {
    const { title, brand, price, quantity } = req.body;
    if (!title || !brand || !price || !quantity) {
        res.status(400).json({ status: "fail", message: "all fields are required" });
    } else {
        const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1001;
        const newProduct = {
            id: newId,
            title, brand, price, quantity
        };
        products.push(newProduct);
        res.status(201).json({ status: "Success", message: "Product created successfully", data: newProduct });
    }
})

app.patch("/editproduct/:id", (req, res) => {
    const pid = req.params.id;
    const { title, brand, price, quantity } = req.body;
    if (!title || !brand || !price || !quantity) {
        res.status(400).json({ status: "fail", message: "all fields are required" });
    } else {
        const index = products.findIndex((product) => product.id == pid);
        if (index == -1) {
            res.status(400).json({ status: "fail", message: "product not found" });
        } else {
            products[index].title = title;
            products[index].brand = brand;
            products[index].price = price;
            products[index].quantity = quantity;
            res.status(200).json({ status: "success", message: "product updated successfully", data: products[index] });
        }
    }
})
app.delete("/deleteproduct/:id",(req,res)=>{
    const pid=req.params.id;
    const index = products.findIndex(ind=>ind.id == pid);
})
app.listen(port, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running on port ${port}`);
    }
    catch (err) {
        console.log("server error", err.message);
    }
})