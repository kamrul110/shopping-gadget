import React, { useState } from 'react';
import { Link, useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { addToStoreMarkList } from './utilty/addToDb';

const ProductDetail = () => {

  let { detailsId } = useParams();

  let data = useLoaderData()
  //
  let { cartItems, setCartItems } = useOutletContext();
//

  let id = parseInt(detailsId)

  let newProduct = data.find(product => product.product_id === id)
  let { product_id, product_image, product_title, rating, specification, price } = newProduct
  // console.log(detailsId, data)
    // let [cart,setCart] =useState('')

  let handleMarkToCard = (id) => {

    addToStoreMarkList(id)

//
    const isExist = cartItems.find(item => item.product_id === id);
    if (!isExist) {
      setCartItems([...cartItems, newProduct]);
    }
//
  }



  return (
    <div>
      <h1 className='text-center font-bold text-[30px]'>Products details</h1>
      <div className="flex justify-center items-center ">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product_image}  // Dynamically load the image
              alt={product_title}  // Use the product title as alt text
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product_title}</h2>

            <p className="font-semibold text-lg">Price: ${price}</p>

            {/* Specification list */}
            <div className="mt-4 text-left">
              <span className="font-bold">Specification:</span>
              <ul className="list-disc pl-5">
                <li>{specification[0]}</li>
                <li>{specification[1]}</li>
                <li>{specification[2]}</li>
                <li>{specification[3]}</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <div className="card-actions justify-center mt-4">

              <button onClick={() => handleMarkToCard(product_id)} className="btn btn-primary">Mark to Cart </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
//tarpor kono akta route set korte korte hobe.jeno ou route e gele ekhane asbe
//step: 2 kuthao click korte hbe




{/*
     <div className='border-2 border-green-500 px-6 py-6'><h1>
<h1 className='font-bold text-2xl'>{product_title}</h1></h1>
<h1 className='mt-6 text-[20px] font-semibold'>price:{price}$</h1>
<h1 className='text-wrap mb-4 mt-6'><span className='font-bold text-2xl'>Specification:</span><br /><br />
    <ol className="list-decimal pl-5 mb-4">
        <li>{specification[0]}</li>
        <li>{specification[1]}</li>
        <li>{specification[2]}</li>
        <li>{specification[3]}</li>
    </ol>
</h1>
</div> 
*/}



// <div className=' flex justify-center '>
//                 <div className=' px-4 py-4 rounded-lg w-[1280px] flex items-center justify-center'>
//                     <div className='flex gap-5 '>

//                         <div className=' rounded-lg w-[300px] overflow-hidden shadow-lg bg-white'><img className=' h-full object-cover rounded-lg' src={product_image} alt="" /></div>

//                         {/*  */}
//                         <div className=' px-6 py-6'><h1>
//                             <h1 className='font-bold text-2xl'>{product_title}</h1></h1>
//                             <h1 className='mt-6 text-[20px] font-semibold'>price:{price}$</h1>
//                             <h1 className='text-wrap mb-4 mt-6'><span className='font-bold text-2xl'>Specification:</span><br /><br />
//                                 <ol className="list-decimal pl-5 mb-4">
//                                     <li>{specification[0]}</li>
//                                     <li>{specification[1]}</li>
//                                     <li>{specification[2]}</li>
//                                     <li>{specification[3]}</li>
//                                 </ol>
//                             </h1>
//                             <Link to="/cart">
//                                 <div className='inline-block'>
//                                     <p className='border-2 px-6 py-4 rounded-2xl bg-[#9538E2] text-white' >Add To Cart</p>
//                                 </div>
//                             </Link>

//                         </div>
//                         {/*  */}

//                     </div>
//                 </div>
//             </div>