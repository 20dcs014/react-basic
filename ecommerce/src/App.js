import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';

function App() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalPro, setFinalPro] = useState([]);
  const [catName, setCatName] = useState('');

  const getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        console.log('Categories:', finalRes);
        setFinalCategory(finalRes);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  };

  const getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((ProRes) => ProRes.data)
      .then((finalRes) => {
        console.log('Products:', finalRes.products);
        setFinalPro(finalRes.products);
      })
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((Prores) => Prores.data)
        .then((finalRes) => {
          console.log('Filtered Products:', finalRes.products);
          setFinalPro(finalRes.products);
        })
        .catch((error) => console.error('Error fetching filtered products:', error));
    }
  }, [catName]);

  const pItems = finalPro.map((products, index) => (
    <ProductItem key={index} pdata={products} />
  ));

  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Product</h1>
          <div className='grid grid-cols-[30%_auto] gap-20px'>
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName} />
            </div>

            <div>
              <div className='grid grid-cols-3 gap-5'>
                {
                  finalPro.length > 0 ? pItems : 'No Product Found'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItem({ pdata }) {
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} alt={pdata.title} className='w-[100%] h-[220px]' />
      <h4>{pdata.title}</h4>
      <b>Rs.{pdata.price}</b>
    </div>
  );
}
