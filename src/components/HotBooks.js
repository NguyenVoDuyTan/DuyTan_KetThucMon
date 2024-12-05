import React from "react";
import ProductCard from "./ProductCard";

const hotBooks = [
  {
    id: 1,
    name: "Doraemon",
    description: "Bán Chạy Nhất",
    image:
      "https://product.hstatic.net/200000343865/product/1_9544a3ba5bd64806ab59f7fd9fafcf13_ea18ba498dbf48458655f34dd7c049e8_f8ec91d806624cd6a4472983958ac4e4_master.jpg",
  },
  {
    id: 6,
    name: "Mặt Nạ Trắng",
    description: "Xem Nhiều Nhất",
    image:
      "https://trangtrinhtham.wordpress.com/wp-content/uploads/2019/10/me1bab7t-ne1baa1-tre1baafng.jpg",
  },
  {
    id: 7,
    name: "Thế Giới ATLANTIS",
    description: "Nhiều Lượt Tìm Kiếm",
    image:
      "https://bizweb.dktcdn.net/100/363/455/products/z48398975736586899037cbeab4b8e.jpg?v=1705552513867",
  },
];

function HotBooks({ addToCart }) {
  return (
    <div className="hot-books">
      <h2>Truyện Hot</h2>
      <div className="product-list">
        {hotBooks.length > 0 ? (
          hotBooks.map((book) => (
            <ProductCard key={book.id} product={book} addToCart={addToCart} />
          ))
        ) : (
          <p>Không có truyện hot nào.</p>
        )}
      </div>
    </div>
  );
}

export default HotBooks;
