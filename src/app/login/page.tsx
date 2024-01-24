"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await axios.post("/api/users/login", user);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold">Sign In Here</h1>

      <div>
        <div className="flex flex-col">
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
            onClick={() => {
              handleSubmit();
            }}
            className=" bg-red-500 rounded p-2 mt-2 text-white"
          >
            {loading ? <FaSpinner className="flex justify-center items-center animate-spin  w-full mx-auto"/> : "Login"}
            
          </button>
         <div className="mt-3">
         <Link href="/signup">
            New Here?
            <span className="hover:text-blue-500 underline">Create an account</span>
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
