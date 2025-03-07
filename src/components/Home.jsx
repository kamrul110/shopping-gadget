import React, { useState } from 'react';
import banner from '../assets/banner.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';


const Home = () => {


    const AllData = useLoaderData();
    const [data, setData] = useState(AllData || []);

    // Filter function
    const filterResult = (categoryItem) => {
        let result = AllData.filter((curData) => curData.category === categoryItem);
        setData(result);
    };

    return (
        <>
            <div className=" mt-4  min-h-[600px] bg-[#9538E2] max-w-[1540px] mx-auto text-white rounded-lg">
                {/* Navbar */}

                {/* Navbar */}

                {/* Banner Section */}
                <div className="text-center mt-8 px-4">
                    {/* Heading */}
                    <h1 className="text-[32px] md:text-[56px] mb-4">
                        Upgrade Your Tech Accessorize with <br />
                        Gadget Heaven Accessories
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-[14px] md:text-[16px] mb-6">
                        Explore the latest gadgets that will take your experience to the next level. <br />
                        From smart devices to the coolest accessories, we have it all!
                    </h2>

                    {/* Button */}
                    <button className="border border-white px-4 py-2 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors">
                        Shop Now
                    </button>

                    {/* Image */}

                </div>



            </div>
            <div className="flex justify-center lg:mt-[-150px]  md:mt-[-50px] sm:mt-[-50px]  overflow-hidden ">
                <img
                    src={banner}
                    className="w-full max-w-[1000px] h-auto object-contain rounded-[30px] border-2 p-4"
                    alt="Banner"
                />
            </div>

            <h2 className='text-center text-info'>Lets shop</h2>


          
           <div className='md:flex flex-wrap mt-5 gap-4'>
                <div className='md:w-1/5 '>

                <button className='btn btn-warning w-full mb-4' onClick={() => setData(AllData)}>Show All</button>
                    <button className='btn btn-warning w-full mb-4' onClick={() => filterResult("Fitness")}>Fitness</button>
                    <button className='btn btn-warning w-full mb-4' onClick={() => filterResult("Home Appliances")}>Home Appliances</button>

                    <button className='btn btn-warning w-full mb-4' onClick={() => filterResult("Electronics")}>Electronics</button>
                    <button className='btn btn-warning w-full mb-4'>Fitness</button>
                    <button className='btn btn-warning w-full mb-4'>Home Appliances</button>
                </div>


                <div className="w-full md:w-3/4  ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Example Cards */}

                        {
                            data.map((item) => <AllProducts key={item.product_id} item={item}></AllProducts>)
                        }
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default Home;