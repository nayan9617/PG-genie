import { useState } from "react";
import loginImage from '../assets/PG-genie-login.jpeg';

const Login = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();

  if(!username || !password){
    console.error("All fields are necessary to proceed!");
  } else{
    console.log("Logged In successfully having username: ", username);
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ececec] px-4">
      <div className="flex w-full max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white items-center">
        

        <div className="w-1/2 hidden md:block relative">
          <img
            src={loginImage}
            alt="Room"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-3 left-9 text-[#4e3d32] drop-shadow-md text-lg font-black">
            <p>Your journey begins with</p>
            <p>finding the right place to stay – <em>PG Buddy</em></p>
          </div>
        </div>


        <div className="w-full md:w-1/2 p-10 text-black flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          
          <form 
          onSubmit={handleSubmit}
          className="space-y-6">
            <div>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                type="text"
                id="username"
                className="w-full mt-1 p-2 border-b-2 border-[#4e3d32] outline-none focus:border-[#4e3d32] transition-all"
                placeholder="Username"
              />
            </div>

            <div>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                id="password"
                className="w-full mt-1 p-2 border-b-2 border-gray-300 outline-none focus:border-[#4e3d32] transition-all"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 !bg-brown-500 text-white rounded-md hover:!bg-[#453326] transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <a href="/register" className="!text-black !font-bold hover:!underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;