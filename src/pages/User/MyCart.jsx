import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProductCard from "../../shared/ProductCard";


const MyCart = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const [cartProducts, setCartProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://si-an-boutique-server.vercel.app/cart_products?email=${userEmail}`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setCartProducts(data);
                setIsLoading(false);
            })
    }, [url])
    return (
        <div>
            <p className="bg-black py-4 text-primary text-center">GET 20% SALE WITH COUPON CODE CGBNJKI25</p>
            <div className='container mx-auto py-20 px-10 lg:px-0'>
                {
                    isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>)
                        :
                        (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between items-center gap-5 lg:gap-10'>
                            {
                                cartProducts?.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                            }
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;