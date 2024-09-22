// src/components/Cart.js
import React from 'react';
import '../styles/Cart.css'; // Ensure this path is correct

const Cart = ({ cart, updateQuantity }) => {
  const cartItems = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleUpdateQuantity = (event, id, change) => {
    event.preventDefault(); // Prevent default button action
    updateQuantity(id, change);
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={(e) => handleUpdateQuantity(e, item.id, -1)}>-</button>
                {item.quantity}
                <button onClick={(e) => handleUpdateQuantity(e, item.id, 1)}>+</button>
              </td>
              <td>
                <button onClick={(e) => handleUpdateQuantity(e, item.id, -item.quantity)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
