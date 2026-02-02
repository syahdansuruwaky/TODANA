function addToCart(productName) {
  const nomorWA = "6282199804156";
  const pesan = `Halo! Saya ingin membeli ${productName}. Apakah masih tersedia?`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}