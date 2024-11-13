// const parent = document.getElementById("root");
// const element = React.createElement("h1", {}, "shopping cart app");
// const root = ReactDOM.createRoot(parent);
// const item1 = React.createElement("li", {}, "Item1");
// const item2 = React.createElement("li", {}, "Item2");
// const list = React.createElement("ul", {}, item1, item2);
// root.render([element, list]);

const parent = document.getElementById("root");
const element = <h1> Shopping Cart App </h1>;
const root = ReactDOM.createRoot(parent);
root.render(element);
