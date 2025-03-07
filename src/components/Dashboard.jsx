import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredMarkList } from './utilty/addToDb';
import AllProducts from './AllProducts';
// npm install --save react-tabs
{/* ekhane getStoredMarkList korchilam jeta eikhane get kore show korabo ar  addToStoreMarkList holo add kora bt show kora na  */ }
const Dashboard = () => {
    let allProducts = useLoaderData()
    // console.log(allProducts);
    let [productList, setProductList] = useState([])

    useEffect(() => {
        let storeProductList = getStoredMarkList()
        // console.log(storeProductList);
        let storedProductListInt = storeProductList.map(id => parseInt(id))

        // console.log(storedProductListInt, storeProductList, allProducts);


        let markProductList = allProducts.filter(product => storedProductListInt.includes(product.product_id));

        setProductList(markProductList)
    }, [])


    return (

        <div>
            <h1>My dashboard</h1>
            <Tabs>
                <TabList>
                    <Tab>Product List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Product I Mark:{productList.length} </h2>
               
                    {
                        productList.map(item => <AllProducts item={item} key={item.product_id}></AllProducts>)
                    }

                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;