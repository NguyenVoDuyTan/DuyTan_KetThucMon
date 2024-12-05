import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    "Truyện Tranh",
    "Truyện Kinh Dị",
    "Truyện Viễn Tưởng",
    "Truyện Tình Cảm",
  ];

  return (
    <div className="categories">
      <h2>Chọn thể loại truyện bạn thích</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
