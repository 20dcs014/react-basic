import React from 'react';

export default function Category({ finalCategory, setCatName }) {
  console.log('Category Component - Categories:', finalCategory);

  // Assuming each category is an object with a `name` property
  const cat = finalCategory.map((category, i) => (
    <li onClick={() => setCatName(category.name)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
      {category.name}
    </li>
  ));

  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul>
        {cat}
      </ul>
    </div>
  );
}
