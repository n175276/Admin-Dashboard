fetch("orders.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
         <tr>
            <td> <img src='${product.productName}'> </td>
            <td>${product.productNumber}</td>
            <td>${product.paymentStatus}</td>
            <td class="${
              product.shipping === "Declined"
                ? "danger"
                : product.shipping === "pending"
                ? "warning"
                : "primary"
            }">${product.shipping}</td>
            <td>${product.productCode}</td>
         </tr>
      `;
    }
    placeholder.innerHTML = out;
  });

const sidemenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");

const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menubtn.addEventListener("click", () => {
  sidemenu.style.display = "block";
});

//hide sidebar
closebtn.addEventListener("click", () => {
  sidemenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  // themeToggler.querySelector('span').classList.toggle('active');
});

// Orders.forEach(order => {
//   const tr = document.createElement("tr");
//   const trContent ='<td>'
// trContent += order.productName
// trContent +='</td>td>'
// trContent +=order.productNumber
// trContent +='</td><td>'
// trContent +=order.paymentStatus
// trContent +='</td><td class='
// trContent +=order.shipping === "Declined" ? "danger" : order.shipping ==="pending" ? "warning" : "primary"
// trContent +='>'
// trContent +=order.shipping
// trContent +='</td><td class="primary">Details</td>';
// console.log(trContent)
//   tr.innerHTML = trContent;
//   document.querySelector("table tbody").appendChild(tr);
// });
