import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import các component của bạn
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import NewReleases from "./components/NewReleases";
import HotBooks from "./components/HotBooks";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Bill from "./components/Bill";

// Dữ liệu các sản phẩm trong các thể loại
const categoryProducts = {
  "Truyện Tranh": [
    {
      id: 1,
      name: "Truyện Tranh 1",
      description: "Mô tả Truyện Tranh 1",
      image: "/image1.jpg",
    },
    {
      id: 2,
      name: "Truyện Tranh 2",
      description: "Mô tả Truyện Tranh 2",
      image: "/image2.jpg",
    },
  ],
  "Truyện Kinh Dị": [
    {
      id: 3,
      name: "Truyện Kinh Dị 1",
      description: "Mô tả Truyện Kinh Dị 1",
      image: "./image3.jpg",
    },
    {
      id: 4,
      name: "Truyện Kinh Dị 2",
      description: "Mô tả Truyện Kinh Dị 2",
      image: "./image4.jpg",
    },
  ],
  "Truyện Tình Cảm": [
    {
      id: 5,
      name: "Truyện Tình Cảm 1",
      description: "Mô tả Truyện Tình Cảm 1",
      image: "./image5.jpg",
    },
    {
      id: 6,
      name: "Truyện Tình Cảm 2",
      description: "Mô tả Truyện Tình Cảm 2",
      image: "./image6.jpg",
    },
  ],
  "Truyện Cổ Tích": [
    {
      id: 7,
      name: "Truyện Cổ Tích 1",
      description: "Mô tả Truyện Cổ Tích 1",
      image: "./image7.jpg",
    },
    {
      id: 8,
      name: "Truyện Cổ Tích 2",
      description: "Mô tả Truyện Cổ Tích 2",
      image: "./image8.jpg",
    },
  ],
};

function App() {
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);

  const cartCount = cartItems.length;

  // Cập nhật giỏ hàng trong localStorage và state
  const updateCartStorage = (newCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setCartItems(newCartItems);
  };

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      alert("Sản phẩm đã có trong giỏ hàng!");
    } else {
      updateCartStorage([...cartItems, product]);
    }
  };

  // Xử lý thanh toán
  const handleCheckout = () => {
    updateCartStorage([]);
    alert("Thanh toán thành công! Cảm ơn bạn đã mua sắm.");
  };

  // Xử lý đăng nhập
  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("user", username);
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} user={user} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/register"
              element={
                <Register onRegister={handleLogin} onLogin={handleLogin} />
              }
            />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/category/:category"
              element={
                <CategoryPage
                  categoryProducts={categoryProducts}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/new-releases"
              element={<NewReleases addToCart={addToCart} />}
            />
            <Route
              path="/hot-books"
              element={<HotBooks addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} handleCheckout={handleCheckout} />
              }
            />
            <Route
              path="/checkout"
              element={<Checkout handleCheckout={handleCheckout} />}
            />
            <Route path="/bill" element={<Bill />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
