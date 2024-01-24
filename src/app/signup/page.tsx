"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";


const SignUp = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
   
  });

  const handleSubmit = async (event:any) => {
    event?.preventDefault()
   try{
    setIsLoading(true)
    //Save User to Database
    console.log(user)
    const res = await axios.post("/api/users/signup", user)

    if(res.status === 200){
      router.push("/login")

      setUser({
        name: "",
        email: "",
        password: "",
       
      })

  
    }
    
    

   }catch(err){
    console.log(err)
   }finally{
    setIsLoading(false)
   }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold">Sign Up Here</h1>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border-2 border-red-200 p-2 rounded outline-none focus:border-red-400"
            placeholder="Enter your name..."
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-red-200 p-2 rounded outline-none focus:border-red-400"
            placeholder="Enter your email..."
            type="email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="border-2 border-red-200 p-2 rounded outline-none focus:border-red-400"
            placeholder="*************"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />

          <button
           type="submit"
            className="bg-red-500 rounded p-2 mt-2 text-white"
           disabled={isLoading}
          >{isLoading ? <FaSpinner className="flex justify-center items-center animate-spin  w-full mx-auto"/> : " Sign Up"}
           
          </button>
          <div className="mt-3">

          <Link href="/login">
            Already have an account{" "}
            <span className="hover:text-blue-500 underline">login here</span>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
