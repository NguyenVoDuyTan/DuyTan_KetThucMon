import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {/* Hiển thị giá sản phẩm */}
      <p className="price">{product.price} VND</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

export default ProductCard;
