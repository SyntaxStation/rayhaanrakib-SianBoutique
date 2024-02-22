import React from 'react';
import Swal from "sweetalert2";
import useAuth from '../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.pname.value;
        const type = form.type.value;
        const brand_name = form.brand_name.value;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const price = form.price.value;
        const details = form.details.value;
        const newProduct = { brand_name, type, name, image1, image2, price, details, userEmail };
        
        fetch('https://si-an-boutique-server.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your product has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
    }

    return (
        <div>
            <div className="bg-gray-100 mt-2">
                <h1 className='text-center pt-12 text-3xl font-bold'>Add Branded Clothes Here</h1>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12 hidden lg:block">
                            <img className=" normal-case text-xl mb-6 w-32" src="/logo.png" alt="Si'an Store" />
                            <p className="max-w-xl text-lg">
                                Welcome to Si'an Boutique, your ultimate destination for chic and stylish fashion. At Si'an, we believe that fashion is more than just clothing - it's a form of self-expression, a way to showcase your unique personality and style.
                            </p>

                            <div class="mt-8">
                                <address class="mt-2 not-italic">
                                    Uttara, Dhaka-1230, Bangladesh
                                </address>
                            </div>

                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form
                                onSubmit={handleAddProduct}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="sr-only" for="name">Name</label>
                                    <input
                                        required
                                        className="w-full rounded-lg border-primary p-3 text-sm border"
                                        placeholder="Product Name"
                                        type="text"
                                        id="name"
                                        name='pname'
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="email">Product Photo</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border border-primary p-3 text-sm"
                                            placeholder="Primary Photo URL"
                                            type=""
                                            name="image1"
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" for="email">Product Photo</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border border-primary p-3 text-sm"
                                            placeholder="Secondary Photo URL"
                                            type=""
                                            name="image2"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="price">Price</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border border-primary p-3 text-sm"
                                            placeholder="Product Price"
                                            type="number"
                                            name="price"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="name">Name</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border-primary p-3 text-sm border"
                                            placeholder="Brand Name"
                                            type="text"
                                            id="name"
                                            name='brand_name'
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" for="name">Name</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border-primary p-3 text-sm border"
                                            placeholder="Product Type"
                                            type="text"
                                            id="name"
                                            name='type'
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label className="sr-only" for="message">Product Details</label>

                                    <textarea
                                        required
                                        className="w-full rounded-lg border outline-none border-primary p-3 text-sm"
                                        placeholder="Product Details"
                                        rows="4"
                                        name="details"
                                    ></textarea>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;