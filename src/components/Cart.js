import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, handleCheckout }) {
  const navigate = useNavigate(); // Khai báo useNavigate trong Cart.js

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Format the total price with commas for thousands
  const formattedTotalPrice = new Intl.NumberFormat("vi-VN").format(totalPrice);

  // Format item prices with commas for thousands
  const formatPrice = (price) => new Intl.NumberFormat("vi-VN").format(price);

  // Khi người dùng nhấn thanh toán, sẽ gọi hàm handleCheckout để xử lý
  const handleCheckoutClick = () => {
    handleCheckout(); // Gọi hàm handleCheckout để thực hiện thanh toán
    navigate("/bill"); // Chuyển hướng đến trang hóa đơn
  };

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn trống</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{formatPrice(item.price)} VND</p>
            </div>
          ))}
          <h3>Tổng tiền: {formattedTotalPrice} VND</h3>
          <button onClick={handleCheckoutClick}>Thanh toán</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
