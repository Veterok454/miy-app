import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { cartItems } = useContext(CartContext);

  const { currency } = useContext(ShopContext);

  const calculateCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <b className='text-xl font-bold pr-5'>Total:</b>
      <b>
        {currency}
        {calculateCartTotal()}
      </b>
    </div>
  );
};

export default CartTotal;
