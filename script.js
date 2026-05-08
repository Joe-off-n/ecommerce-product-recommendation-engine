const products = [
  { name: "Wireless Headphones", category: "electronics", rating: 4.7, price: "$120" },
  { name: "Smart Watch", category: "electronics", rating: 4.5, price: "$150" },
  { name: "Laptop Backpack", category: "fashion", rating: 4.2, price: "$45" },
  { name: "Sneakers", category: "fashion", rating: 4.6, price: "$80" },
  { name: "Data Science Handbook", category: "books", rating: 4.9, price: "$35" },
  { name: "Machine Learning Guide", category: "books", rating: 4.8, price: "$40" }
];

const productGrid = document.getElementById("productGrid");
const recommendationGrid = document.getElementById("recommendationGrid");
const categorySelect = document.getElementById("category");
const showBtn = document.getElementById("showBtn");
const themeToggle = document.getElementById("themeToggle");

function displayProducts(items, container) {
  container.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Rating:</strong> ${product.rating}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    `;
    container.appendChild(card);
  });
}

function getRecommendations() {
  const selectedCategory = categorySelect.value;

  let filteredProducts = products;

  if (selectedCategory !== "all") {
    filteredProducts = products.filter(
      product => product.category === selectedCategory
    );
  }

  filteredProducts.sort((a, b) => b.rating - a.rating);

  displayProducts(filteredProducts, recommendationGrid);
}

showBtn.addEventListener("click", getRecommendations);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

displayProducts(products, productGrid);
displayProducts(products.slice(0, 3), recommendationGrid);