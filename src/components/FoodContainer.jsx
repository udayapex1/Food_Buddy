import React from 'react';
import FoodCard from './FoodCard';
import data from '../../db';

const FoodContainer = () => {
  return (
    <div
      className='flex flex-col items-center justify-center flex-wrap py-[3rem]'
      id='Popular'
    >
      <div className='flex flex-col items-center justify-center gap-6'>
        <h2 className='text-[17px] font-bold text-[#FF9800]'>LET’S ORDER</h2>
        <h1 className='text-5xl font-medium'>
          Choose the variety of food you like.
        </h1>
        <p className='text-[#878794] font-normal text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra orci sed risus tincidunt <br /> tempor. Nulla malesuada
          vestibulum nibh.
        </p>
      </div>
      <div className='flex items-center justify-center gap-6 mt-2 flex-wrap'>
        {data.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodContainer;
