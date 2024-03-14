import { memo } from "react";
import { handleModalMenu } from "./Handle ModalMenu";
import { Link } from "react-router-dom";

function ViewModalMenu({ data }) {
  return (
    <div
      id="modal__nenu"
      onClick={handleModalMenu}
      className="fixed hidden bg-black/50 left-0 top-0 z-10 right-0 bottom-0 cursor-pointer"
    >
      <div
        className=" cursor-default h-full max-w-96 overflow-y-auto p-2 bg-white modal__menu-form"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto">
          <div className="w-full flex justify-end">
            <svg
              onClick={handleModalMenu}
              xmlns="http://www.w3.org/2000/svg"
              className="block h-5 cursor-pointer"
              viewBox="0 0 384 512"
            >
              <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5
                     39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 
                     327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>
          </div>
          <div className="mt-5">
            
            {!!data.email ? (
              <>
                <div className="text-center mb-3">
                  <div>
                    Username: {data.username}
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li className="text-center">
                    <Link
                      className=" p-1 bg-white hover:bg-slate-200 block"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-center">
                    <Link
                      className=" p-1 bg-white hover:bg-slate-200 block"
                      to="/Setting"
                    >
                      Setting
                    </Link>
                  </li>
                  <li className="text-center">
                    <Link
                      className=" p-1 bg-white hover:bg-slate-200 block"
                      to="/Discover"
                    >
                      Discover
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="flex flex-col gap-2">
                <li className="text-center">
                  <a
                    className=" p-1 hover:bg-green-200 bg-green-300 block"
                    href="/login/"
                  >
                    Login
                  </a>
                </li>
                <li className="text-center">
                  <a
                    className=" p-1 hover:bg-blue-200 bg-blue-300 block"
                    href="/register/"
                  >
                    Register
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ViewModalMenu);
