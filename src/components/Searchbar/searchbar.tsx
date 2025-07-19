import { Suspense} from 'react'
import search_icon from "../../assets/Searchbar/search-icon-light.svg";

export default function searchbar() {
  return (
    <div>
        <Suspense fallback={<div>Loading Searchbar...</div>}>
            <div className="searchbar-container flex items-center justify-center w-full h-20">
              <input id="search-text" type="text" placeholder="What are you looking for?" className="w-[85vw] text-white h-14 border-2 transition duration-150 ease-in-out delay-150 border-gray-500 hover:border-white rounded-4xl pl-6"/>
              <button className="search-button" type='submit'>
                  <img src={search_icon} alt="search_icon" className='h-16 w-16'/>
              </button>
            </div>
        </Suspense>
    </div>
  )
}