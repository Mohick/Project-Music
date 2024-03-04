function Login() {
  return (
    <div  className="flex container justify-center items-center relative m-auto">
      <div className="w-full mt-3 border p-1 shadow-inner shadow-white sm:max-w-96">
        <div className="text-green-400 font-bold text-center text-2xl">Login</div>
       <div className="grid gap-2">
       <div >
            <div>
                <label className="text-white capitalize" htmlFor="email">Email</label>
            </div>
            <div className="focus-within:h-6">
                <input className="px-1 w-full focus:z-50 focus:fixed lg:focus:relative top-0 left-0 right-0" type="email" name="email" id="email" />
            </div>
        </div>
        <div>
            <div>
                <label className="text-white capitalize" htmlFor="password">password</label>
            </div>
            <div className="focus-within:h-6">
                <input className="px-1 w-full focus:fixed focus:z-50 lg:focus:relative top-0 left-0 right-0" type="password" name="password" id="password" />
            </div>
        </div>
       </div>
       <div className="flex justify-center ">
        <button className="text-white mt-4 block rounded-md overflow-hidden cursor-pointer p-2 bg-green-300 ">
            Login
        </button>
       </div>
      </div>
    </div>
  );
}

export default Login;
