import { Suspense } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    return (
        <Suspense fallback={<div>Loading Footer...</div>}>
            <footer className="bg-[#4B164C] text-white pt-10 pb-7 px-12 w-full mt-15">
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="md:w-7/12">
                        <h2 className="text-2xl font-bold">Barter</h2>
                        <p><i className='text-gray-300'>Who says without money, theres is no trade~</i></p>
                        <p className="text-base text-white mt-3">
                            Barter is a next-generation community-driven platform where individuals can exchange their skills, services, and assets without traditional currency. Our mission is to make collaboration, resource-sharing, and community support more accessible and economically inclusive.
                        </p>
                    </div>

                    <div className="md:w-4/12 flex flex-col items-start md:items-end">
                        <div className="mb-4 text-left md:text-right">
                            <h3 className="font-semibold text-2xl mb-2">Contact Us</h3>
                            <p className="text-base">Have ideas or feedback?</p>
                            <p className="text-base">Email: <a href="mailto:hello@barter.com" className="text-blue-400">hello@barter.com</a></p>
                        </div>

                        <div className="flex gap-4 justify-start md:justify-end">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition text-xl">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition text-xl">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition text-xl">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-white text-sm font-bold mt-10">
                    © {new Date().getFullYear()} Barter. All rights reserved.
                </div>
            </footer>
        </Suspense>
    );
}
