// ProductList.js
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Doraemon",
    description: "Tác giả | Fujiko F. Fujio",
    image:
      "https://product.hstatic.net/200000343865/product/1_9544a3ba5bd64806ab59f7fd9fafcf13_ea18ba498dbf48458655f34dd7c049e8_f8ec91d806624cd6a4472983958ac4e4_master.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Naruto",
    description: "Tác giả | Masashi Kishimoto",
    image: "https://stbhatay.com.vn/wp-content/uploads/2023/02/nrt26.webp",
    price: 150,
  },
  {
    id: 3,
    name: "Kiss",
    description: "Truyện Tình cảm",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOdd03UUDn-TuArgHP3kGk_r8t5AUndhVGQ&s",
    price: 190,
  },
  {
    id: 4,
    name: "Vị Ngon Của Máu",
    description: "Truyện Tình cảm",
    image:
      "https://popsimg.akamaized.net/api/v2/containers/file2/cms_thumbnails/mautuoi_thumb_640x960-8d47650d4ed4-1631871641471-Iup6sefq.jpeg?v=0&maxW=420&format=jpg",
    price: 200,
  },
  {
    id: 5,
    name: "Ma Sói",
    description: "Truyện kinh dị",
    image:
      "https://static.oreka.vn/800-800_96de755d-726c-4433-abb1-183a1ce2c498",
    price: 150,
  },
  {
    id: 6,
    name: "Mặt Nạ Trắng",
    description: "Truyện kinh dị",
    image:
      "https://trangtrinhtham.wordpress.com/wp-content/uploads/2019/10/me1bab7t-ne1baa1-tre1baafng.jpg",
    price: 220,
  },
  {
    id: 7,
    name: "Thế Giới ATLANTIS",
    description: "Truyện Viễn Tưởng",
    image:
      "https://bizweb.dktcdn.net/100/363/455/products/z48398975736586899037cbeab4b8e.jpg?v=1705552513867",
    price: 170,
  },
  {
    id: 8,
    name: "Thiên Mã",
    description: "Truyện Viễn Tưởng",
    image:
      "https://imgs.vietnamnet.vn/Images/2011/04/17/13/20110417132201_Thien%20Ma.jpg",
    price: 130,
  },
];

function ProductList({ cartCount, setCartCount, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart} // Truyền hàm addToCart
        />
      ))}
    </div>
  );
}

export default ProductList;
