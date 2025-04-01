import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import FoodContext from '../context/FoodContext';

const Cart = () => {
  const { cartItems } = useContext(FoodContext);

  const total = cartItems.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const gst = (total * 12) / 100;

  const pay = total + gst;

  if (cartItems.length === 0) {
    return (
      <div className='flex items-center justify-center p-28'>
        <h1 className='text-[40px] font-semibold'>No Items In Your Cart ...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className='text-center text-[40px] font-semibold py-5'>
          Your Cart Items
        </h1>
        <div className='flex justify-between px-16 p-10'>
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className='h-64 w-72 flex flex-col items-center justify-center gap-8 shadow-lg rounded-xl'>
            <h1 className='text-center text-lg font-medium'>
              Total Amount : <br />
              <br />${parseInt(total)}
              <br />
              Tax : ${parseInt(gst)}
              <br />
              Pay Amount : ${parseInt(pay)}
            </h1>
            <button className='py-2 px-8 rounded-3xl text-slate-200 bg-indigo-800 hover:bg-indigo-500 hover:text-black transition duration-500 ease-in-out'>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
