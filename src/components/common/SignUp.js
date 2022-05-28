import React from 'react'

const SignUp = () => {
    return (
      <div className=" flex justify-center align-center mt-5">
        <div className="border rounded-lg border-gray-300 p-10">
            <p className="text-2xl  font-semibold mb-3 text-center">Sign Up</p>
            <hr className="mt-1 mb-3"/>
          <div>
            <p className="text-xl font-semibold">Username</p>
            <input
              className="border w-64 border-gray-300 outline-gray-200 p-2"
              type="text"
            />
          </div>
          <div className="my-3">
            <p className="text-xl font-semibold">Email</p>
            <input
              className="border w-64 border-gray-300 outline-gray-200 p-2"
              type="text"
            />
          </div>
          <div className="my-3">
            <p className="text-xl font-semibold">Password</p>
            <input
              className="border w-64 border-gray-300 outline-gray-200 p-2"
              type="password"
            />
          </div>
          <button className="bg-[#01befe] py-2 px-3 text-white font-semibold">
            Signup
          </button>
        </div>
      </div>
    );
}

export default SignUp
