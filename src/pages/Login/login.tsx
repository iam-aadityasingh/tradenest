import '../../index.css';
import { Suspense, lazy } from "react";
const Button = lazy(() => import('../../components/Button/button'));

export default function login() {
  return (
    <div>
      <Suspense fallback={<div>Loading Login Form...</div>}>
        <div className="login-container w-[25rem] h-[28rem] bg-[#161616] p-8 justify-center items-center rounded-lg">
          <form className='text-white flex flex-col justify-center items-start'>
            <label className='from-label' htmlFor="email">Enter Email:</label>
            <input type="text" name="email" id="email" placeholder='Email' className='form-inp serif mb-6' autoComplete='email'/>

            <label className='from-label' htmlFor="password">Enter password:</label>
            <input type="password" name="password" id="password" placeholder='Password' className='form-inp serif mb-15' autoComplete='current-password'/>

            <Button text="login" variant="primary" fullWidth />
          </form>
        </div>
      </Suspense>
    </div>
  )
}
