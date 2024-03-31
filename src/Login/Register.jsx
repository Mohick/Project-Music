import HandleSignUp from "./handle register/handleSignUp";
import handleFocusSignUp from "./handle register/handleFocusSignUp";
function Register() {
  return (
    <div className="flex container h-lvh justify-center items-center relative m-auto">
      <div className="w-full mt-3 border rounded-md drop__form--login--signup p-1 shadow-inner shadow-white sm:max-w-96">
        <div className="text-green-400 font-bold text-center text-2xl">
          Login
        </div>
        <div className="grid gap-2">
          <div>
            <div className="mb-1 flex justify-between text-white">
              <label className=" text-white capitalize" htmlFor="userName ">
                user name
              </label>
              <div
                id="register__alert--username"
                className="capitalize flex justify-end items-end text-xs"
              >
                <div>Your usename great than 6 charater !</div>
              </div>
            </div>
            <div className="focus-within:h-6">
              <input
                onFocus={handleFocusSignUp.handleAlertUsernameWhenOnFocus}
                onBlur={HandleSignUp.handleAlertUsernameWhenOnblur}
                maxLength={22}
                className="px-1 outline-none rounded focus:z-50 w-full focus:fixed lg:focus:relative top-0 left-0 right-0"
                type="text"
                name="username"
                id="username"
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-white">
              <label className="block text-white capitalize" htmlFor="email">
                Email
              </label>
              <div
                id="register__alert--email"
                className="capitalize flex justify-end items-end text-xs"
              >
                <div>Use Your Email !</div>
              </div>
            </div>
            <div className="focus-within:h-6">
              <input
                onFocus={handleFocusSignUp.handleAlertEmailWhenOnFocus}
                onBlur={HandleSignUp.handleAlertEmailWhenOnblur}
                className="px-1 outline-none rounded  focus:z-50  w-full focus:fixed lg:focus:relative top-0 left-0 right-0"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-white">
              <label className="block text-white capitalize" htmlFor="password">
                password
              </label>
              <div
                id="register__alert--password"
                className="capitalize flex justify-end items-end text-xs"
              >
                <div>Your password great than 8 charater !</div>
              </div>
            </div>
            <div className="focus-within:h-6">
              <input
                onFocus={handleFocusSignUp.handleAlertPasswordWhenOnFocus}
                onBlur={() => {
                  HandleSignUp.handleAlertPasswordWhenOnblur();
                }}
                className="px-1 outline-none rounded focus:z-50 w-full focus:fixed lg:focus:relative top-0 left-0 right-0"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-white">
              <label
                className=" text-white capitalize"
                htmlFor="reEnterPassword"
              >
                Re-ter Password
              </label>
              <div
                id="register__alert--reEnterPassword"
                className="capitalize flex justify-end items-end text-xs"
              >
                <div>Please Re-enter Password !</div>
              </div>
            </div>
            <div className="focus-within:h-6">
              <input
                onFocus={handleFocusSignUp.handleAlertReEnterPasswordWhenOnFocus}
                onBlur={() => {
                  HandleSignUp.handleAlertReEnterPasswordWhenOnblur();
                }}
                className="px-1 outline-none rounded focus:z-50 w-full focus:fixed lg:focus:relative top-0 left-0 right-0"
                type="reEnterPassword"
                name="reEnterPassword"
                id="reEnterPassword"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <button
            onClick={() => {
              HandleSignUp.handleSignUp();
            }}
            className="text-white mt-4 block rounded-md overflow-hidden cursor-pointer p-2 bg-green-300 "
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
