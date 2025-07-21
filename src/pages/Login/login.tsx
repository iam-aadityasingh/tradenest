import '../../index.css';
import { Suspense, lazy } from "react";
const Button = lazy(() => import('../../components/Button/button'));

export default function login() {
  return (
    <div>
      <Suspense fallback={<div>Loading Login Form...</div>}>
        <div className="login-container w-[25rem] h-[30rem] bg-[#161616] text-white p-8">
          <form>
            <label htmlFor="email">Enter Email:</label>
            <input type="text" name="email" id="email" placeholder='Email' className='form-inp' autoComplete='email'/>

            <label htmlFor="password">Enter password:</label>
            <input type="password" name="password" id="password" placeholder='Password' className='form-inp' autoComplete='password'/>

            <Button text='Login' />
          </form>
        </div>
      </Suspense>
    </div>
  )
}
