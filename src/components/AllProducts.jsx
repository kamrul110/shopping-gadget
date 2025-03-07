import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = ({item}) => {
    let {product_id,product_title,product_image,price,description,category} = item
    return (
<Link to={`/details/${product_id}`}>
<div>
      <div className="card bg-base-100  shadow-xl  h-[500px]">
      <figure className="px-4  pt-10">
        <img src={product_image} className="rounded-xl card-img-top" />
      </figure>
      <div className="card-body  text-center">
        <h2 className="card-title">{product_title} </h2>
        <p>Price:{price}</p>
        <p>{description}</p>
        <div className="card-actions ">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
        </div>
</Link>
    );
};

export default AllProducts;