document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product-card");

  const categoryFilters = document.querySelectorAll(".filter-category");
  const priceFilters = document.querySelectorAll(".filter-price");
  const brandFilters = document.querySelectorAll(".filter-brand");

  // Get checked checkbox values
  function getCheckedValues(filters) {
    return Array.from(filters)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase()); // lowercase to match dataset
  }

  function filterProducts() {
    const selectedCategories = getCheckedValues(categoryFilters);
    const selectedPrices = getCheckedValues(priceFilters);
    const selectedBrands = getCheckedValues(brandFilters);

    products.forEach(product => {
      const category = product.dataset.category.toLowerCase();
      const price = parseInt(product.dataset.price);
      const brand = product.dataset.brand.toLowerCase();

      // Match logic
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(category);

      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(brand);

      const matchPrice =
        selectedPrices.length === 0 ||
        selectedPrices.some(range => {
          if (range === "50000+") return price > 50000;
          const [min, max] = range.split("-").map(Number);
          return price >= min && price <= max;
        });

      // Show or hide product
      if (matchCategory && matchPrice && matchBrand) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Attach change event listener to all filters
  [...categoryFilters, ...priceFilters, ...brandFilters].forEach(cb => {
    cb.addEventListener("change", filterProducts);
  });
});







