import { Suspense } from "react";
import searchicon from '../../assets/Searchbar/search-icon-dark.svg';

const searchbar = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Searchbar...</div>}>
          <div className="searchbar-container w-[30vw] md:w-[50vw] lg:w-[90vw] h-16 bg-white rounded-full flex items-center border-2 border-black mx-auto">
            <input placeholder="Search..." type="text" className="search-input" />
            <button className="search-button h-9 w-9 ">
                <img src={searchicon} className="hover:rotate-45 delay-150" alt="search_icon" />
            </button>
          </div>
      </Suspense>
    </div>
  );
};

export default searchbar;