import content_writer from '../../assets/Card/content-writer.png';
import like from '../../assets/Card/card-like-dark.svg';
import info from '../../assets/Card/card-info-dark.svg';
import { Suspense } from 'react';

const handleClick = () => {
  alert('Image Button Clicked!');
}

export default function card() {
  return (
    <div>
      <Suspense fallback={<div>Loading Card Content...</div>}>
          <div className="card border-2 border-gray-300 rounded-lg shadow-lg p-1 h-100 w-70">
            <div className="card-img w-full h-[50%]">
              <img src={content_writer} alt="Content Writer" className="w-full h-full rounded-lg object-cover object-center"/>
            </div>
            <div className="card-content h-[50%] mt-2">
              <div className="card-text h-[70%] p-1">
                <h2 className='font-bold text-black text-2xl serif'>Content Writer</h2>
                <p className='text-gray-600'>Write engaging content for various platforms.</p>
              </div>
              <div className="card-action h-[30%] flex justify-end items-center p-1 gap-2">
                <div className="card-like flex items-center mr-2">
                  <button type="button" onClick={handleClick}>
                    <img src={like} alt="Like" className="cursor-pointer h-8 w-8"/>
                  </button>
                </div>
                <div className="card-info flex items-center mr-2">
                  <button type="button" onClick={handleClick}>
                    <img src={info} alt="info" className="cursor-pointer h-8 w-8"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Suspense>
    </div>
  )
}