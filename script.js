const products = [
  {
    name: "T-Shirt",
    price: 15000
  },
  {
    name: "Phone Case",
    price: 5000
  }
];

let list = document.getElementById("productList");

products.forEach(p => {
  list.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.price} Ks</p>
      <button onclick="buy('${p.name}')">Buy</button>
    </div>
  `;
});

function buy(name) {
  alert(name + " selected!");
}
