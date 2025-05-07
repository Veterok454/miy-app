import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { ShopContext } from '../context/ShopContext.js';
import Title from '../components/Title.jsx';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeFromCart } =
    useContext(CartContext);

  const { currency } = useContext(ShopContext);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/place-order');
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      {cartItems.length === 0 ? (
        <p>Cart empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className='py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row sm:items-center items-start justify-between gap-4'
            >
              <div className='flex items-start gap-6 '>
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className='w-16 sm:w-20 '
                />

                <div>
                  <h3 className='text-sm sm:text-lg font-medium'>
                    {item.name}
                  </h3>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>
                      {currency} {item.price}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <span>Quantity:</span>
                <input
                  type='number'
                  value={item.quantity}
                  min='1'
                  onChange={(e) =>
                    updateCartItemQuantity(item._id, parseInt(e.target.value))
                  }
                  className='w-16 ml-2 border p-1 text-center'
                />
              </div>
              <div>
                <p>
                  Subtotal: {currency}
                  {calculateItemTotal(item)}
                </p>
              </div>
              <button onClick={() => removeFromCart(item._id)}>
                <img
                  className='w-4 mr-4 sm:w-5'
                  src={assets.bin_icon}
                  alt='bin icon'
                />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className='flex flex-col justify-end items-end mt-10 gap-6'>
        <h3 className='text-xl font-bold pr-5'>
          Total: {currency}
          {calculateCartTotal()}
        </h3>
        <button
          onClick={handleLogin}
          style={{ letterSpacing: '2px' }}
          className='bg-red-end text-white px-8 py-3 text-sm hover:bg-red-start active:bg-red-end uppercase tracking-wider transition duration-300 ease-in-out transform hover:scale-105'
          type='submit'
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
