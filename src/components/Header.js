import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaListAlt,
  FaFireAlt,
  FaShoppingCart,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";

function Header({ cartCount, user, onLogout }) {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    "Truyện Tranh",
    "Truyện Kinh Dị",
    "Truyện Viễn Tưởng",
    "Truyện Tình Cảm",
  ];

  // Hàm lọc danh sách thể loại theo tìm kiếm
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header>
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Trang chủ
            </Link>
          </li>
          <li className="dropdown">
            <span>
              <FaListAlt /> Thể loại
            </span>
            <div className="dropdown-content">
              <input
                type="text"
                placeholder="Tìm kiếm thể loại..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <ul>
                {filteredCategories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/new-releases">
              <FaFireAlt /> Mới phát hành
            </Link>
          </li>
          <li>
            <Link to="/hot-books">
              <FaFireAlt /> Truyện Hot
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart /> Giỏ hàng ({cartCount})
            </Link>
          </li>
          {user ? (
            <li>
              <span>
                Xin chào, {user} <br />
              </span>
              <button onClick={onLogout}>Đăng xuất</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaUser /> Đăng nhập
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUserPlus /> Đăng ký
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
