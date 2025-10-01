const container = document.getElementById("product");

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-title">${product.title}</div>
        <div class="product-price">$${product.price}</div>

        <!-- hidden details box -->
        <div class="product-details" style="display:none;">
          <p><b>Category:</b> ${product.category}</p>
          <p><b>Price:</b> $${product.price}</p>
          <p>${product.description}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        const details = card.querySelector(".product-details");
        const isVisible = details.style.display === "block";

        document.querySelectorAll(".product-details").forEach(d => d.style.display = "none");
        if (!isVisible) {
          details.style.display = "block";
        }
      });

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error fetching products:", err);
  });