import '../../index.css';
import { Suspense, lazy } from 'react';
const Button = lazy(() => import('../../components/Button/button'));

export default function signup() {
  return (
        <div>
          <Suspense fallback={<div>Loading Signup Form...</div>}>
            <div className="login-container sm:w-[20rem] md:w-[25rem] lg:w-[30rem] w-full h-[33rem] bg-[#161616] p-8 justify-center items-center rounded-lg mx-auto;">
              <form className='text-white grid grid-cols-1 grid-rows-9 h-full items-center'>
                
                <label className='from-label' htmlFor="name">Enter Name:</label>
                <input type="text" name="name" id="name" placeholder='Username' className='form-inp serif' autoComplete='given-name'/>

                <label className='from-label' htmlFor="ph.no">Enter Number:</label>
                <input type="text" name="ph.no" id="ph.no" placeholder='Phone Number' className='form-inp serif' autoComplete='email'/>
    
                <label className='from-label' htmlFor="email">Enter Email:</label>
                <input type="text" name="email" id="email" placeholder='Email' className='form-inp serif' autoComplete='email'/>

                <label className='from-label' htmlFor="password">Enter password:</label>
                <input type="password" name="password" id="password" placeholder='Password' className='form-inp serif' autoComplete='current-password'/>

                <div className="action-btns flex justify-between items-center mt-4">
                  <Button text="Signup" variant="primary" size='md' />
                  <Button text="Login" variant="primary" size='md' />
                </div>
              
              </form>
            </div>
          </Suspense>
        </div>
  )
}
