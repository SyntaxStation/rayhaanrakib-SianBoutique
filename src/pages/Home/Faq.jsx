import React from 'react';

const Faq = () => {
    return (
        <div className='container mx-auto px-10'>
            <FAQ></FAQ>
        </div>
    );
};

export default Faq;


function FAQ() {
    return (
        <>
            <section className="w-full divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200">
                <details className="group p-4" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        How can I track my order?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac13 desc-ac13"
                        >
                            <title id="title-ac13">Open icon</title>
                            <desc id="desc-ac13">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        You can easily track your order by logging into your account and accessing the order history. Alternatively, you will receive a tracking number via email once your order has been shipped, allowing you to track its status directly through the shipping carrier's website.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        What is your return policy?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac14 desc-ac14"
                        >
                            <title id="title-ac14">Open icon</title>
                            <desc id="desc-ac14">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you may return it within 30 days of delivery for a full refund or exchange. Please visit our Returns & Exchanges page for more details on our return policy.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        How do I know what size to order?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac15 desc-ac15"
                        >
                            <title id="title-ac15">Open icon</title>
                            <desc id="desc-ac15">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        To ensure the perfect fit, we recommend referring to our Size Guide, which provides detailed measurements for each product. If you have any further questions about sizing, feel free to contact our customer service team for assistance.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Do you offer international shipping?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac16 desc-ac16"
                        >
                            <title id="title-ac16">Open icon</title>
                            <desc id="desc-ac16">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination. You can view the list of countries we ship to during the checkout process.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        What payment methods do you accept?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac14 desc-ac14"
                        >
                            <title id="title-ac14">Open icon</title>
                            <desc id="desc-ac14">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        We accept several convenient and secure payment methods to make your shopping experience hassle-free. These include major credit cards such as Visa, Mastercard, American Express, and Discover. Additionally, we also accept payment via PayPal for added flexibility and security.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Is my payment information secure?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac14 desc-ac14"
                        >
                            <title id="title-ac14">Open icon</title>
                            <desc id="desc-ac14">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Yes, protecting your personal and payment information is our top priority. We utilize industry-standard encryption technology to ensure that your payment details are securely transmitted during the checkout process. Your information is never stored on our servers, providing you with peace of mind when making online purchases.
                    </p>
                </details>
            </section>
        </>
    )
}
