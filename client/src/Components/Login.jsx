import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CelebrationPage from './celebrationPage';

function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [isShow,setShow]=useState(false)
    const [loader,setLoader]=useState(false)
    const navigate=useNavigate();


    const login=async(e)=>{
         e.preventDefault();
       try{
        console.log("making request")
        setLoader(true)
        // const response=await axios.post('http://localhost:8080/api/auth/login',{email:email,password:password},{withCredentials:true})
        const response=await axios.post('https://portfolio-api-pi-ten.vercel.app/api/auth/login',{email:email,password:password},{withCredentials:true})
        console.log("request done")
        if(response.status===200){
            if(response.data.success===true){
                console.log("toast shoud work")
                toast.success("login successfull")
                navigate('/auth=true',{ state: "verified" })
                
            }else{
               toast.error("login denied")
            }
        }

       
       }catch(err){
        toast.error("login error")
       }finally{setLoader(false)}
    };
    
  return (
    <>
    
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Log In   
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                      }}/>
                  </div>
                  <div>
                      <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type={`${isShow?"text":"password"}`} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" checked={isShow} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" onChange={()=>{setShow(state=>!state)}}/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Show Password</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  className="w-full text-white bg-slate-500 hover:bg-primary-700 focus:ring-4 focus:outline-none flex justify-center items-center focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={(e)=>{
                    login(e)
                  }}>
                     {loader&&<svg class="animate-spin h-5 w-5 mr-3 ... bg-white " viewBox="0 0 24 24"></svg>}
                    Sign in</button>
                 
              </div>
          </div>
      </div>
  </div>
</section>
<ToastContainer/>
    </div></>
  )
}

export default Login