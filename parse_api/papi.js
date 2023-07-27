const sampleApiUrl = 'https://dummyjson.com/products/1'; //  URL with the actual API endpoint

// Execute JavaScript code after the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Make a network request to the API
  fetch(sampleApiUrl)
    .then(response => response.json())
    .then(data => {
      handleApiResponse(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});

function handleApiResponse(data) {
  const productContainer = document.getElementById('productContainer');
  const imageContainer = document.getElementById('imageContainer');
  const thumbnailContainer = document.getElementById('thumbnailContainer');

  // Check if elements are found before modifying them
  if (productContainer && imageContainer && thumbnailContainer) {
    const productId = data.id;
    const productTitle = data.title;
    const productDescription = data.description;
    const productPrice = data.price;
    const productDiscountPercentage = data.discountPercentage;
    const productRating = data.rating;
    const productStock = data.stock;
    const productBrand = data.brand;
    const productCategory = data.category;
    const productThumbnailUrl = data.thumbnail;
    const productImages = data.images;

    // Populate product information in the product container
    productContainer.innerHTML = `
      <h2>${productTitle}</h2>
      <p>${productDescription}</p>
      <p>Price: $${productPrice.toFixed(2)}</p>
      <p>Discount Percentage: ${productDiscountPercentage}%</p>
      <p>Rating: ${productRating}</p>
      <p>Stock: ${productStock}</p>
      <p>Brand: ${productBrand}</p>
      <p>Category: ${productCategory}</p>
    `;

    // Add product thumbnail
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = productThumbnailUrl;
    thumbnailContainer.appendChild(thumbnailImage);

    // Add product images
    for (const imageUrl of productImages) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageContainer.appendChild(imageElement);
    }
  } else {
    console.error('One or more container elements not found.');
  }
}
