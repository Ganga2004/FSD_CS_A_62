const para = document.createElement("p");
const btn1 = document.getElementById("addpara");
btn1.addEventListener("click", () => {
  para.id = "para-1";
  para.style.color = "red";
  para.style.backgroundColor = "yellow";
  para.innerHTML = "<h4> this is my paragraph </h4>";
  document.body.appendChild(para);
  const btn1 = document.getElementById("addpara");
});
