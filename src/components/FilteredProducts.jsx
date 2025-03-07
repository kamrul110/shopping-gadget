import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';

const FilteredProducts = () => {
    const AllData = useLoaderData();
    const [data, setData] = useState(AllData);

    // Filter function
    const filterResult = (categoryItem) => {

        let result = AllData.filter((curData) => curData.category === categoryItem);
        setData(result);
        
    };

    return (
        <div className='md:flex flex-wrap mt-5 gap-4'>
            {/* Sidebar Filter Buttons */}
            <div className='md:w-1/5 '>

                <button className='btn btn-warning w-full mb-4' onClick={() => setData(AllData)}>Show All</button>
                <button className='btn btn-warning w-full mb-4' onClick={() => filterResult("Fitness")}>Fitness</button>
                <button className='btn btn-warning w-full mb-4' onClick={() => filterResult("Home Appliances")}>Home Appliances</button>
                <button className='btn btn-warning w-full mb-4' onClick={() => filterResult("Electronics")}>Electronics</button>
                
            </div>

            {/* Product Display Grid */}
            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.map((item) => <AllProducts key={item.product_id} item={item} />)}
                </div>
            </div>
        </div>
    );
};

export default FilteredProducts;
