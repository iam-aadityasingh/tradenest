import { Suspense } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<div><big><i>Loading footer...</i></big></div>}>
    <footer className="bg-[#FFF4B7] text-black py-12 px-6 w-full mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-8/12">
          <h2 className="text-2xl font-bold">Barter</h2>
          <p className="text-base text-black-200 mt-2">
            Barter is a next-generation community-driven platform where individuals can exchange their skills, services, and assets without traditional currency. Our mission is to make collaboration, resource-sharing, and community support more accessible and economically inclusive.
          </p>
        </div>

        <div className="md:w-4/12 flex flex-col items-start md:items-end">
          <div className="mb-4 text-left md:text-right">
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="text-base">Have ideas or feedback?</p>
            <p className="text-base">Email: <a href="mailto:hello@barter.com" className="text-[#006A67] hover:underline">hello@barter.com</a></p>
          </div>

          <div className="flex gap-4 justify-start md:justify-end mb-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-300 transition text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-300 transition text-xl">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition text-xl">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-800 text-sm mt-6">
        © {new Date().getFullYear()} Barter. All rights reserved.
      </div>

      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#006A67] text-white px-4 py-2 rounded-full shadow-lg hover:bg-black transition"
        >
          ↑ Back to Top
        </button>
      )}
    </footer>
    </Suspense>
  );
}