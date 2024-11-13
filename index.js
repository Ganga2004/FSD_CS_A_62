const para = document.createElement("p");
const btn1 = document.getElementById("addpara");
btn1.addEventListener("click", () => {
  para.id = "para-1";
  para.style.color = "red";
  para.style.backgroundColor = "yellow";
  para.innerHTML = "<h4> this is my paragraph </h4>";
  document.body.appendChild(para);
});
const btn2 = document.getElementById("additem");
const list = document.getElementById("list1");
btn2.addEventListener("click", () => {
  const item = document.createElement("li");
  item.innerText = "hi";
  list.appendChild(item)
});

// -> two way binding 
// -> components
// -> virtual dom
// -> jsx
// -> how many ways to create the react app
    // (1) create react app using CDN
        // react ,reactdom and babel packages
    // (2) Create react app using CRA
        // npm and npx
    // (3) create react app using vite framework
// Toolkit required
// package manager ,transfiler/compiler , bundler(webpack,moduleES)
