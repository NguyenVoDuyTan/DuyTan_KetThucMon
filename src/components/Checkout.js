import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ handleCheckout }) {
  const [recipientName, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate(); // Khai báo hook navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gọi handleCheckout để xử lý thanh toán
    handleCheckout();

    // Sau khi thanh toán thành công, chuyển hướng đến trang Bill
    navigate("/bill");
  };

  return (
    <div>
      <h2>Nhập thông tin thanh toán</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên người nhận"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Thanh toán</button>
      </form>
    </div>
  );
}

export default Checkout;
