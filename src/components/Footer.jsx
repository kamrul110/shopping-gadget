import React from 'react';

const Footer = () => {
    return (
        <div className=" mt-5 px-4 max-w-[1540px] mx-auto bg-[#FFF]">
           
            <div>
                <div>
                    <div className='mb-4'>
                    <p className='text-center text-[32px] font-bold'>Gadget Heaven</p>
                    <p className='text-center text-gray-900 text-opacity-60'>Leading the way in cutting-edge technology and innovation.</p>
                    
                    </div>
                    <hr />
                    <div className='flex justify-around mt-10'>
                        <div className='  text-center'>
                            <p className='font-bold text-[20px]'>Services</p>
                            <p >Product Support</p>
                            <p>Order Tracking</p>
                            <p>Shipping & Delivery</p>
                            <p>Returns</p>
                        </div>
                        <div className='  text-center'>
                            <p className='font-bold text-[20px]'>Company</p>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </div>
                        <div className='  text-center'>
                            <p className='font-bold text-[20px]'>Legal</p>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;