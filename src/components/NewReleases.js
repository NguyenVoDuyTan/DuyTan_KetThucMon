import React from "react";
import ProductCard from "./ProductCard";

const newReleases = [
  {
    id: 8,
    name: "Thiên Mã",
    description: "Truyện Viễn Tưởng",
    image:
      "https://imgs.vietnamnet.vn/Images/2011/04/17/13/20110417132201_Thien%20Ma.jpg",
    price: 130,
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
    id: 4,
    name: "Vị Ngon Của Máu",
    description: "Truyện Tình cảm",
    image:
      "https://popsimg.akamaized.net/api/v2/containers/file2/cms_thumbnails/mautuoi_thumb_640x960-8d47650d4ed4-1631871641471-Iup6sefq.jpeg?v=0&maxW=420&format=jpg",
    price: 200,
  },
];

function NewReleases({ addToCart }) {
  return (
    <div className="new-releases">
      <h2>Truyện Mới Phát Hành</h2>
      <div className="product-list">
        {newReleases.length > 0 ? (
          newReleases.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>Không có truyện mới phát hành.</p>
        )}
      </div>
    </div>
  );
}

export default NewReleases;
