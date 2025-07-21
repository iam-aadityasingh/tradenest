import '../../index.css';
import { Suspense } from "react";

export default function login() {
  return (
    <div>
      <Suspense fallback={<div>Loading Login Form...</div>}>
        <div className="login-container bg-gray-800 text-white p-8 rounded-lg shadow-lg h-[28rem] w-[40rem]">
          <div className="from-input">
            <form>
              <label htmlFor="email">Enter Email:</label>
              <input type="text" name="email" id="email" placeholder='Email' className='form-inp'/>

              <label htmlFor="password">Enter password:</label>
              <input type="text" name="password" id="password" placeholder='Password' className='form-inp'/>

              <button type="submit">Login</button>
            </form>
          </div>
          <div className="form-background"></div>
        </div>
      </Suspense>
    </div>
  )
}
